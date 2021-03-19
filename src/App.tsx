import React from "react";
import "./App.css";
import Demo3DRotation from "./components/Demo3DRotation";
import DemoListSlot from "./components/DemoListview";
import DemoMorphSlot from "./components/DemoMorph";

function App() {
  return (
    <div className="App bg-gray-600 h-screen">
        <div className="border-b">
            <DemoMorphSlot />
        </div>
        <div className="border-b">
            <DemoListSlot />
        </div>
        <div className="border-b">
            <Demo3DRotation />
        </div>
    </div>
  );
}

export default App;
