import React from 'react'

import styled from 'styled-components'

import {FaSun, FaMoon} from 'react-icons/fa'

const Nav = () => {
  return (
      <StyledNav>
          <h1 className='logo' id='logo'><a href='#'>LC</a></h1>
          <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Projects</a></li>
              <li><a href='#'>Resumé</a></li>
              <li><a href='#'>Contact</a></li>
              <li className='toggleDarkMode'><FaSun/></li>
              <li className='hide'>Hamburger</li>
          </ul>
      </StyledNav>
  )
}

const StyledNav = styled.nav`
    min-height: 5vh;
    display:flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem;
    z-index: 5;
    background-color: rgba(28,29,37,.5);
    a{
            text-decoration: none;
            color: white;
        }
    ul{
        font-family: 'League Spartan', sans-serif;
        display: flex;
        list-style: none;
        li{
            padding: 1rem;
        }
        font-size: 20px;
    }
    .logo{
        font-family: 'Cinzel Decorative', cursive;
        font-size: 40px;
    }
    .toggleDarkMode{
        cursor: pointer;
    }
    .hide{
        display: none;
    }
    @media screen and (min-width: 1368px){
        padding-left: 10rem;
        padding-right: 10rem;
    }
    @media screen and (min-width: 1024px) and (max-width: 1367px){
        padding-left: 5rem;
        padding-right: 5rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px){
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
    @media screen and (max-width: 767px){
        padding-left: 1.25rem;
        padding-right: 1.25rem;
    }
`;

export default Nav