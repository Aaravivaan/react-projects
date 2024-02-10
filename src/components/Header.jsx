import React from 'react'

import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

import styled from 'styled-components'

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <h3><strong>LOGO</strong></h3>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height:7rem;
  background-color: ${({theme})=> theme.colors.bg};
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-weight:bold;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);

  .logo{
    height:auto;
    max-width:30%;
  }
`;

export default Header