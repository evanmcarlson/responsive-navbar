import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

const StyledBurger = styled.div`
  width: 1rem;
  height: 1.5rem;
  position: fixed;
  top: 15px;
  left: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 1.2rem;
    height: 0.15rem;
    background-color: ${({ open }) => open ? '#fff' : '#fff'};
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default Burger
