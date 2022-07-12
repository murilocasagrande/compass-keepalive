import styled from 'styled-components';
import WeekDay from 'enums/weekDay';

const HomeHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 30.28%;
  margin: 25px 40px 0 40px;
`
const HeaderLogo = styled.img`
  max-height: 42.75px;
`
const HeaderClock = styled.div`
  text-align: center;
  h1 {
    font-size: 7rem;
    line-height: 7rem;
  }
  p{}
`
const HeaderWeather = styled.div`
`

const Home = () => {
  let currentDate = new Date();
  return (
    <>
      <HomeHeader>
        <HeaderLogo src='images/compasso-logo-dark.png' />
        <HeaderClock>
          <h1>{`${currentDate.getHours()}:${currentDate.getMinutes()}`}</h1>
          <p>{`${WeekDay[currentDate.getDay()]}`}</p>
        </HeaderClock>
        <HeaderWeather>
          <p>Passo Fundo - RS</p>
          <h1>22º</h1>
        </HeaderWeather>
      </HomeHeader>
    </>
  )
}

export default Home;