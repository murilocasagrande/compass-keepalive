import styled from 'styled-components';
import HomeHeader from './Header';
import HomeBody from './Body';
import HomeFooter from './Footer';

const HomeHtml = styled.html`
background: linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%);
`

const Home = () => {

  return (
    <HomeHtml>
      <HomeHeader />
      <HomeBody />
      <HomeFooter />
    </HomeHtml>
  )
}

export default Home;