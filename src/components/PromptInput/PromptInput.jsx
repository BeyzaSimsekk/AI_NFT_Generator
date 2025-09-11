import React, { useEffect, useRef, useState } from "react";
import "./PromptInput.css";

function PromptInput({ prompt, setPrompt }) {
  const textAreaRef = useRef(null);

  useEffect(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  }, [prompt]);

  return (
    <div className="prompt-input__container glass">
      <textarea
        ref={textAreaRef}
        className="prompt-input__field"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Generate your unique NFT"
        rows={1}
      />
    </div>
  );
}

export default PromptInput;
