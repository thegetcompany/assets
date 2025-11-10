const {initializeApp} = require("firebase/app");
const {getFirestore, initializeFirestore} = require("firebase/firestore");
const {getAuth} = require("firebase/auth");
const {getStorage} = require("firebase/storage");
const {getAI, VertexAIBackend} = require("firebase/ai");
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

initializeFirestore(app, {
  ignoreUndefinedProperties: true,
});

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const ai = getAI(app, {backend: new VertexAIBackend()});

module.exports = {
  app,
  db,
  auth,
  storage,
  ai,
};
