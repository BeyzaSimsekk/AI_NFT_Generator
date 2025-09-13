import React, { useEffect, useRef } from "react";
import "./PromptInput.css";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

function PromptInput({ prompt, setPrompt, setLoading }) {
  const textAreaRef = useRef(null);

  useEffect(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  }, [prompt]);

  const handleRandomPrompt = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://api-inference.huggingface.co/models/gpt2",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: "Generate a creative NFT prompt:",
          }),
        }
      );

      const data = await res.json();
      const text = data[0].generated_text?.replace(
        /^Generate a creative NFT prompt:\s*/,
        ""
      );

      setPrompt(text.trim());
      //setLoading(false);
    } catch (err) {
      console.error("Random prompt error:", err);
      alert("Failed to fetch random prompt.");
    }
    setLoading(false);
  };

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
      <button
        className="prompt-input__random-btn"
        onClick={handleRandomPrompt}
        title="Generate Random Prompt"
      >
        <GiPerspectiveDiceSixFacesRandom size={20} />
      </button>
    </div>
  );
}

export default PromptInput;
