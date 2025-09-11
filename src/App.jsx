import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PromptInput from "./components/PromptInput/PromptInput";

//BUTONLARDA KALDIM!!!!!!!!!!!

function App() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="app-container">
      <Header />
      <PromptInput prompt={prompt} setPrompt={setPrompt} />
    </div>
  );
}

export default App;
