import styled from "styled-components";
import Logo from "../assets/Grupo 569.svg";

const Container = styled.header`
  width: 100%;
  height: 10vh;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: rgba(108, 122, 137 /1);
  backdrop-filter: blur(35px);
`;

const DivHeader = styled.div`
  width: 20%;
  height: 6vh;
  display: flex;
  position: relative;
  left: 70px;
  align-items: center;
  justify-content: space-around;

  button {
    background-color: gray;
    border-radius: 35px;
    width: 48%;
    height: 100%;
    color: white;
    text-align: center;
    font-size: 17px;
    font-weight: 500;
  }
`;

const NavHeader = styled.nav`
  width: 20%;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ul {
    color: white;
    width: 50%;
    display: flex;
    justify-content: space-around;
  }

  input {
    width: 10vw;
    height: 3vh;
    border-radius: 8%;
  }
`;

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="" />
      <DivHeader>
        <button>Series</button>
        <button>Filmes</button>
      </DivHeader>
      <NavHeader>
        <input />
        <ul>
          <li>Filtro</li>
          <li>Login</li>
        </ul>
      </NavHeader>
    </Container>
  );
}
