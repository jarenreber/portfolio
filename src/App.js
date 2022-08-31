import React, { useRef } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Links from "./components/Links";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Gila from "./components/Gila";
import CanyonSocial from "./components/CanyonSocial";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Nav />
        <Gila />
        <CanyonSocial />
        <Skills />
        <About />
        <Contact />
        <Links />
      </main>
    </div>
  );
}

export default App;
