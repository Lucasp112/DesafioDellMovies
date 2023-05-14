import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  width: 100%;
  height: 10vh;
  padding: 50px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const UlBox = styled.ul`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    font-size: 1.1rem;
    font-weight: 500;
    :hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: 1.3s;
    }
  }
`;

const InputStyle = styled.div`
  input {
    width: 15vw;
    height: 3vh;
    border-radius: 8%;
  }
  button {
    height: 3vh;
    border-radius: 8%;
  }
`;

export default function NavBar() {
  return (
    <NavContainer>
      <UlBox>
        <li>Teste</li>
        <li>Teste</li>
        <li>Teste</li>
        <li>Teste</li>
        <li>Teste</li>
        <li>Teste</li>
        <li>Teste</li>
        <li>Teste</li>
      </UlBox>
      <InputStyle>
        <input />
        <button></button>
      </InputStyle>
    </NavContainer>
  );
}
