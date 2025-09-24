const { execSync } = require("child_process");

const scripts = ["generate-icons", "export-all-assets.js", "move-non-svg"];

scripts.forEach((script) => {
  console.log(`Running ${script}...`);
  execSync(`node ./scripts/${script}`, { stdio: "inherit" });
});
