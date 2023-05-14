import { createGlobalStyle } from "styled-components";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import NavBar from "./components/nav/NavBar";

const GlobalStyle = createGlobalStyle`
*{margin: 0;
padding: 0;
box-sizing: border-box;
list-style: none;
font-family: 'Open Sans', sans-serif;


}
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <NavBar />
    </>
  );
}
