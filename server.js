import "dotenv/config";
import cors from "cors";
import express from "express";
import multer from "multer";
import { SpeechClient } from "@google-cloud/speech";

const app = express();
const upload = multer();
const speechClient = new SpeechClient();
app.use(cors());


app.listen(5001, () => {
  console.log("Server started on port 5001");
});
