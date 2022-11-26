import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js"

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [tela , setTela]= useState(1)

  const trocaTela = (tela)=>{
    setTela(tela)
  }

  if (tela ===1){
    return (
      <MainContainer >
      <GlobalStyled />
      <TelaLogin trocaTela={trocaTela}/>
      </MainContainer>
    );

  }else if (tela===2){
    return(
    <MainContainer >
    <GlobalStyled />
    <TelaCadastro  trocaTela={trocaTela} />
    </MainContainer>)

  }else {
    return (
      <MainContainer >
      <GlobalStyled />
      <TelaUsuarioCadastrado trocaTela={trocaTela}/>
      </MainContainer>
    );

  }

 
}

export default App;