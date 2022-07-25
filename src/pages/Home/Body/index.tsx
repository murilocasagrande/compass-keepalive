import styled from 'styled-components';

const BodyContainer = styled.div`
  display:flex;
`

const BodyLogo = styled.section`
  width: 50vw;
  img {
    z-index: 0;
    position: absolute;
    left: -15%; 
    bottom: 1%;
    max-width: 70vw;
    max-height: 70vh;
  }
  @media screen and (max-width: 850px){
    display: none;
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
  }
  @media screen and (max-width: 1441px){
    h1{
      font-size: 3rem;
    }
    @media screen and (max-height: 830px){
      width: 60vw;
      h1{
        font-size: 3rem;
      }
      @media screen and (max-height: 768px){
        width: 60vw;
        h1{
          font-size: 3rem;
        }
      }
    }
  }
  @media screen and (max-width: 1024px){
    @media screen and (max-height: 767px){
      h1{
        font-size: 2.7rem;
      }
    }
    @media screen and (max-height: 719px){
      width: 70vw;
      h1{
        font-size: 2.7rem;
      }
    }
    @media screen and (max-height: 670px){
      width: 80vw;
      h1{
        font-size: 2.5rem;
      }
    }
  }
  @media screen and (max-width: 850px){
    width: 100vw;
    h1{
      font-size: 4rem;
    }
    @media screen and (max-width: 450px){
      h1{
        font-size: 2.5rem;
      }
      
      @media screen and (min-height: 750px){
        margin-left: 20vw;
        h1{
          font-size: 3rem;
        }
      }
    }
    @media screen and (max-width: 450px){
      margin-top: 5%;
      margin-left: 5vw;
      h1{
        font-size: 2.5rem;
      }
      p {
        margin-bottom: 10px;
      }
    }
    
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