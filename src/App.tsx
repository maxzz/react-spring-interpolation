import React from "react";
import "./App.css";
import DemoMorphSlot from "./components/MainDemo";

function App() {
  return (
    <div className="App bg-gray-600 h-screen">
        <div className="border-b">
            <DemoMorphSlot />
        </div>
        <div className="border-b">
            <DemoMorphSlot />
        </div>
    </div>
  );
}

export default App;
