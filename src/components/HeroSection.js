import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'

import styled from 'styled-components';

import darkfractals from '../images/darkfractals.png'
import darklogo from '../images/darklogo1.png'
import lightfractals from '../images/lightfractals.png'
import lightlogo from '../images/lightlogo2.png'

const HeroSection = ({darkMode}) => {
  return (
      <StyledHero darkMode={darkMode}>
          <div className={`words ${darkMode? `dark`:`light`}`}>
            <h1>Luciano Castro</h1>
              <h3>Front-end Developer</h3>
              <button>About Me</button>
          </div>
          {darkMode ?
              <img className='fractals' src={darkfractals} alt='broken glass'></img> :
        <img className='fractals' src={lightfractals} alt='broken glass'></img>  
        }
          
    </StyledHero>
  )
}

const StyledHero = styled.section`
    min-height: 992vh;
    padding: 0;
    display: relative;
    font-family: 'League Spartan', sans-serif;
    background-size: 70vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    ${props => props.darkMode ? `background-image: url(${darklogo});` : `background-image: url(${lightlogo});`};
    .words{
        padding-top: 40vh;
        ${props => props.darkMode ? `color: white;` : `color: black;`};
        h1{
                font-weight: 400;
            }
            h3{
                margin-left: 5px;
            }
    }
    button{
         
        ${props => props.darkMode ? `color: white;` : `color: black;`};
        border-radius: 30px;
        background: rgba(9,51,55,1);
        background: ${props => props.darkMode ? `linear-gradient(90deg, rgba(18,101,110,1) 0%, rgba(9,51,55,1) 100%);` :
        `linear-gradient(90deg, rgba(236,168,252,1) 0%, rgba(254,218,169,1) 100%);`};
        border: 2px transparent;
        margin-top: 50px;
        &:hover{
            border: 2px solid white;
            background: transparent;
        }
    }
    .fractals{
        z-index: 0;
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
    }
    @media screen and (min-width: 1368px){
        .words{
            padding-left: 10rem;
            h1{
                font-size: 135px;
            }
        }
    }
    @media screen and (min-width: 1024px) and (max-width: 1367px){
        .words{
            padding-left: 5rem;
            h1{
                font-size: 110px;
            }
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1023px){
        .words{
            padding-left: 2.5rem;
            h1{
                font-size: 110px;
            }
        }
        .fractals{
            display: none;
        }
    }
    @media screen and (max-width: 767px){
        .words{
            padding-left: 1.25rem;
            h1{
                font-size: 90px;
            }
        }
        .fractals{
            display: none;
        }
    }
`;

export default HeroSection