import React, { useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  const homeRef = useRef(null);
  const infoRef = useRef(null);
  const serviceRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <>
      <Header
        homeRef={homeRef}
        infoRef={infoRef}
        serviceRef={serviceRef}
        skillsRef={skillsRef}
      />
      <Home
        homeRef={homeRef}
        infoRef={infoRef}
        serviceRef={serviceRef}
        skillsRef={skillsRef}
      />
    </>
  );
}

export default App;
