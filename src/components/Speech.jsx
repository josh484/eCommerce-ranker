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
