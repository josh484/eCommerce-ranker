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
  try {
    const audioBytes = req.file.buffer.toString("base64");
    const audio = { content: audioBytes };
    const config = { languageCode: "en-US" };
    const request = { audio, config };

    const [response] = await speechClient.recognize(request);
    const transcription = response.results
      .map((result) => result.alternatives[0].transcript)
      .join("\n");
    res.send({ transcript: transcription });
  } catch (error) {
    console.error("Error processing speech:", error);
    res.status(500).send("Error processing speech");
  }
});


app.listen(5001, () => {
  console.log("Server started on port 5001");
});
