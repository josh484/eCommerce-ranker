import React, { useState, useRef } from "react";
import axios from "axios";

const Speech = ({onTextChange}) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);


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
