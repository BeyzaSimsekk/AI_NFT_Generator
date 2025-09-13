import React, { useState } from "react";
import "./GenerateControls.css";

function GenerateControls({ prompt, setPrompt, setImages }) {
  const [imageCount, setImageCount] = useState(4);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) {
      alert("Please enter a prompt or use a random prompt.");
      return;
    }

    setLoading(true);

    try {
      const newImages = [];

      for (let i = 0; i < imageCount; i++) {
        const response = await fetch(
          "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
            },
            body: JSON.stringify({
              inputs: prompt,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.statusText}`);
        }

        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        newImages.push(imageUrl);
      }
      setImages(newImages);
    } catch (error) {
      console.error("Image generation failed:", error);
      alert("An error occurred while generating images.");
    } finally {
      setLoading(false);
    }
  };

  //Hugging Face API ile resim oluştur
  const handleRandomPrompt = async () => {
    alert("Random prompt için Hugging Face GPT2 ekleyeceğiz!");
  };

  return (
    <div className="control-container glass">
      <div className="controls-top">
        <select
          value={imageCount}
          onChange={(e) => setImageCount(Number(e.target.value))}
        >
          {[1, 2, 3, 4].map((num) => (
            <option key={num} value={num}>
              {num} Image{num > 1 ? "s" : ""}
            </option>
          ))}
        </select>

        <button onClick={handleRandomPrompt}> Random Prompt</button>
        <button onClick={handleGenerate} disabled={loading}>
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>
    </div>
  );
}

export default GenerateControls;
