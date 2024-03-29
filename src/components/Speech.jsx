import React, { useState, useRef } from "react";
import axios from "axios";

const Speech = ({onTextChange}) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handleStartRecording = async () => {
    if (!navigator.mediaDevices) {
      console.error("Media devices not supported");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };
  const handleStopRecording = () => {
    if (!mediaRecorderRef.current) {
      console.warn("MediaRecorder not initialized or already stopped");
      return;
    }

    mediaRecorderRef.current.stop();
    mediaRecorderRef.current.onstop = async () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
      const formData = new FormData();
      formData.append("file", audioBlob);

      try {
        const response = await axios.post(
          "http://localhost:5001/convert-speech",
          formData
        );
        onTextChange(response.data.transcript);
      } catch (error) {
        console.error("Error sending audio:", error);
      }

      setIsRecording(false);
    };
  };

  return (
    <div>
      <button
        className="btn btn-primary fs-4"
        onMouseDown={handleStartRecording}
        onMouseUp={handleStopRecording}
      >
        {isRecording ? "Release to Stop" : "Press and Hold to Speak"}
      </button>
    </div>
  );
};

export default Speech;
