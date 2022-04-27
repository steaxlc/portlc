import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import HeroSection from "./components/HeroSection";

//Componentes
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <HeroSection/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
