import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PromptInput from "./components/PromptInput/PromptInput";
import GenerateControls from "./components/GenerateControls/GenerateControls";

function App() {
  const [prompt, setPrompt] = useState("");
  const [imageCount, setImageCount] = useState(4);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="app-container">
      <Header />
      <PromptInput
        prompt={prompt}
        setPrompt={setPrompt}
        setLoading={setLoading}
      />
      <GenerateControls
        prompt={prompt}
        setPrompt={setPrompt}
        setImages={setImages}
      />
    </div>
  );
}

export default App;
