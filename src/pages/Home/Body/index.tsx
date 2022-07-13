import styled from 'styled-components';

const BodyContainer = styled.body`
  display:flex;
`

const BodyLogo = styled.section`
  width: 50vw;
  img {
    z-index: 0;
    position: absolute;
    left: -15%; 
    // top: 21.5%;
    bottom: 1%;
  }
`
const Mission = styled.section`
  text-align: right;
  width: 50vw;
  margin: 8.67% 6.98% 0% 0%;
  font-weight: 900;
  h1 {
    color:  #C12D18;
    font-size: 4rem;
    
    &:first-child{
      font-size: 2.25rem;
  }
`

const HomeBody = () => {
  return (
    <BodyContainer>
      <BodyLogo>
        <img src='images/bola-LogoCompasso.png' alt='Logo Compasso' />
      </BodyLogo>
      <Mission>
        <h1>Our mission is</h1>
        <p>Nossa missão é</p>
        <h1>to transform the world</h1>
        <p>transformar o mundo</p>
        <h1>building digital experiences</h1>
        <p>construindo experiências digitais</p>
        <h1>that enable our client's growth</h1>
        <p>que permitam o crescimento dos nossos clientes</p>
      </Mission>
    </BodyContainer>
  )
}

export default HomeBody;