import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Navbar = () => {
  return (
    <Nav>
      <Logo src='https://i.postimg.cc/VNyDKmWQ/white-logo.png' />
      <Burger />
      <User src='https://i.postimg.cc/FKFFYd7D/user.png' />
    </Nav>
  )
}

const Nav = styled.nav`
  color: #fff;
  background: #777;
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
`;

const Logo = styled.img`
  align-self: center;
  height: 2rem;

  @media (max-width: 768px) {
  margin-left: auto;
  }

`;

const User = styled.img`
  align-self: center;
  height: 2rem;
  margin-left: auto;
`;

export default Navbar
