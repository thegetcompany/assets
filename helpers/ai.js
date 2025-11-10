const {getGenerativeModel} = require("firebase/ai");
const {ai} = require("./firebase");

const geminiCreateContent = async ({
  contents,
  config = {},
  systemInstruction = "",
  withGrounding = false,
}) => {
  try {
    let tools = [];
    if (withGrounding) {
      tools = [{googleSearch: {}}];
    }

    const model = getGenerativeModel(ai, {
      model: "gemini-2.0-flash",
      generationConfig: config,
      tools,
    });

    const response = await model.generateContent([contents, systemInstruction]);

    return response;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
};

module.exports = {geminiCreateContent};
