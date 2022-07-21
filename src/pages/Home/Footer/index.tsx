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
`
const SeparatingDiv = styled.div`
  border-right: 1px solid #FFF;
  height: 58px;
  padding: 1% 2%;
  width: 45vw;
  & > p {
    // max-width: 85.18%;
    margin-left: 35.44%;
  }
  @media screen and (max-width: 1440px){
    max-width: 50vw;
    & > p {
      margin-left: 30%;
    }
  }
`
const RefreshTimeout = styled.div`
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
`
const FooterButtons = styled.div`
  display:flex;
  align-items: bottom;
  `

const NavigateBtn = styled.button`
  box-sizing: border-box;
  font-weight: 900;
  background-color: #FFF;
  color: #C13216;
  height: 9.9vh;
  flex-grow: 1;
  width: 6.82vw;
  box-shadow: none;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 8% 5%;
`
const LogoutBtn = styled.button`
font-weight: 900;
background: none;
height: 9.17vh;
width: 6.82vw;
box-shadow: none;
border: none;
-webkit-appearance: none;
-moz-appearance: none;
color: #FFF;
`

const HomeFooter = () => {
  const history = useNavigate();
  const [seconds = 30, setSeconds] = useState<number>();
  useEffect(() => {
    countdown(seconds);
  })
  function countdown(counter: Number | any) {
    setTimeout(() => {
      if (counter > 0) {
        setSeconds(counter - 1)
        return countdown(counter - 1)
      }
      history('/');
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
          <LogoutBtn onClick={() => history('/')}>Logout</LogoutBtn>
        </FooterButtons>
      </FooterContainer>
    </>
  )
}

export default HomeFooter;