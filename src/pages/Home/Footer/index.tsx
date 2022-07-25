import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
display:flex;
z-index: 1;
width: 100vw;
position: fixed;
bottom: 0;
align-items: baseline;
justify-content: space-between;
text-align: right;
color: #FFF;
* {
  font-size: 0.75rem;
}
@media screen and (max-width: 850px){
    
}
@media screen and (max-width: 450px){
  position:relative;
  width: 100vw;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  @media screen and (min-height: 818px){
    position: absolute;
    bottom: 0px;
  }
}
`
const SeparatingDiv = styled.div`
  border-right: 1px solid #FFF;
  padding: 1% 2%;
  width: 45vw;
  margin: auto 0;
  & > p {
    // max-width: 85.18%;
    margin-left: 35.44%;
  }
  @media screen and (max-width: 1440px){
    max-width: 50vw;
    & > p {
      margin-left: 30%;
    }
    @media screen and (max-width: 1110px) {
      & > p {
        margin-left: 20%;
      }
      @media screen and (max-width: 980px) {
        & > p {
          margin-left: 5%;
        }
      }
    }
  }
  @media screen and (max-width: 850px){
  }
  @media screen and (max-width: 450px){
    max-width: 100vw;
    width: 100vw;
    text-align: justify;
    padding: 2%;
    height: auto;
    border-right: none;
    // border-bottom: 1px solid;
    & > p {
      margin: 0;
      width: 100%;
    }
  }
`
const RefreshTimeout = styled.div`
box-sizing: border-box;
  max-height: 9.9vh;
  display: flex;
  align-items: baseline;
  p {
    font-size: 0.875rem;
  }
  .timeout{
    text-align: center;
    p:first-child{
      font-size: 3rem;
      font-weight: bold;
    }
  }
  @media screen and (max-height: 1010px){
    .timeout {
      p:first-child {
        font-size: 2.5rem;
      }
    }
  }
  @media screen and (max-height: 900px){
    .timeout {
      p:first-child {
        font-size: 2rem;
      }
    }
  }
  @media screen and (max-width: 850px){
    margin: auto 0;
    align-items: center;
    > p {
      display: none;
    }
  }
  @media screen and (max-width: 450px){
    justify-content: center;
    width: 100vw;
    > p {
      display: none;
    }
  }
`
const FooterButtons = styled.div`
  display:flex;
  @media screen and (max-width: 450px){
    width: 100vw;
    justify-content: center;
  }
  `

const NavigateBtn = styled.button`
  box-sizing: border-box;
  font-weight: 900;
  background-color: #FFF;
  color: #C13216;
  height: 9.9vh;
  width: 6.82vw;
  box-shadow: none;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 8% 5%;
  @media screen and (max-width: 850px){
    width: 15vw;
  }
  @media screen and (max-width: 450px){
    width: 50vw;
  }

`
const LogoutBtn = styled.button`
font-weight: 900;
background: none;
height: 9.9vh;
width: 6.82vw;
box-shadow: none;
border: none;
-webkit-appearance: none;
-moz-appearance: none;
color: #FFF;
@media screen and (max-width: 850px){
  width: 15vw;
}
@media screen and (max-width: 450px){
  width: 50vw;
  border-top: 1px solid #FFF;
}
`

const HomeFooter = () => {
  const history = useNavigate();
  const [seconds = 60, setSeconds] = useState<number>();
  useEffect(() => {
    countdown(seconds);
  })
  function countdown(counter: Number | any) {
    setTimeout(() => {
      if (counter > 0) {
        setSeconds(counter - 1)
        return countdown(counter - 1)
      } else {
        localStorage.removeItem('token');
        history('/');
      }
    }, 1000)
  }
  const ButtonHandler = () => {
    window.open('https://www.google.com', '_blank');
  }

  return (
    <>
      <FooterContainer>
        <SeparatingDiv>
          <p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
        </SeparatingDiv>
        <RefreshTimeout>
          <p>Application refresh in</p>
          <div className='timeout'>
            <p> {seconds} </p>
            <p>seconds</p>
          </div>
        </RefreshTimeout>
        <FooterButtons>
          <NavigateBtn onClick={ButtonHandler} >Continuar Navegando</NavigateBtn>
          <LogoutBtn onClick={() => { localStorage.removeItem('token'); history('/') }}>Logout</LogoutBtn>
        </FooterButtons>
      </FooterContainer>
    </>
  )
}

export default HomeFooter;