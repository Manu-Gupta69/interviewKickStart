import React from "react";
import "./App.css";
import useWebinar from "./Presentation/Webinar/useWebinar";

function App() {
  const { getWebinars, createWebinars } = useWebinar();



  return (
    <div className="App">
      "Hello World"
      <button onClick={()=>{}}> </button>
    </div>
  );
}

export default App;
