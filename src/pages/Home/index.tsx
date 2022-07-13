import styled from 'styled-components';
import HomeHeader from './Header';
import HomeBody from './Body';
import HomeFooter from './Footer';

const HomeContainer = styled.div`
background: linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%);
`

const Home = () => {

  return (
    <HomeContainer>
      <HomeHeader />
      <HomeBody />
      <HomeFooter />
    </HomeContainer>
  )
}

export default Home;