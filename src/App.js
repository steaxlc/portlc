import React from "react";
import { useState } from "react";
import GlobalStyle from "./components/GlobalStyle";
import HeroSection from "./components/HeroSection";

import styled from "styled-components";

//Componentes
import Nav from "./components/Nav";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <StyledApp className="App" darkMode={darkMode}>
      <Nav
        darkMode={darkMode}
        changeDarkMode={changeDarkMode}
      />
      <HeroSection
      darkMode={darkMode}
      />
        <GlobalStyle />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  background:  linear-gradient(180deg, #1C1D25 0%, #1C1D25 45%, white 55%, white 100%);
  background-size: 400% 400%;
  transition: all 0.5s ease;
  background-position: ${props => props.darkMode ? `0 20%` : ` 80% 100%`};
  position: relative;
  
`;


export default App;
