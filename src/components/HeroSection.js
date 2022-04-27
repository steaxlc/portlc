import React from 'react'

import styled from 'styled-components';

import darkfractals from '../images/darkfractals.png'
import darklogo from '../images/darklogo1.png'

const HeroSection = () => {
  return (
      <StyledHero>
          <div className='words'>
            <h1>Luciano Castro</h1>
            <h3>Front-end Developer</h3>
          </div>
          <img className='fractals' src={darkfractals}></img>
          
    </StyledHero>
  )
}

const StyledHero = styled.section`
    min-height: 90vh;
    padding: 0;
    display: relative;
    background-image: url(${darklogo});
    background-size: 70vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    font-family: 'League Spartan', sans-serif;
    .words{
        padding-top: 30vh;
        h1{
                font-weight: 400;
            }
    }
    .fractals{
        z-index: -1;
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