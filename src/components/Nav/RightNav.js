import React from 'react';
import styled from 'styled-components';

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Tools</li>
      <li>Projects</li>
      <li>Events</li>
      <li>Rooms</li>
      <li>Groups</li>
    </Ul>
  )
}

const Ul = styled.ul`
  ${({ open }) => open = false};
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    padding-left: 3rem;
    flex-flow: column nowrap;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(100vh)' : 'translateY(-100vh)'};
    top: -100vh;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

export default RightNav;
