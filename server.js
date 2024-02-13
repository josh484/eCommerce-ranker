import "dotenv/config";
import cors from "cors";
import express from "express";
import multer from "multer";
import { SpeechClient } from "@google-cloud/speech";

const app = express();
const upload = multer();
const speechClient = new SpeechClient();
app.use(cors());

app.post("/convert-speech", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

});


app.listen(5001, () => {
  console.log("Server started on port 5001");
});
