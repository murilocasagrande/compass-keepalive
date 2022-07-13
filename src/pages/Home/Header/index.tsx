import styled from 'styled-components';
import { WeekDay, Month } from 'enums/DateEnums';

const Header = styled.header`
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
    font-weight: bolder;
  }
  p{
    font-weight: bold;
  }
`
const HeaderWeather = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  font-weight: bold;
  max-width: 15vh;
  div{
    display:flex;
    flex-direction: row;
    img {
      flex: 1;
      max-width: 48px;
      max-height: 48px;
    }
    h1 {
      flex: 1;
      font-size: 2.5rem;
    }
}
`

const HomeHeader = () => {
  let currentDate = new Date();
  return (
    <Header>
      <HeaderLogo src='images/compasso-logo-dark.png' />
      <HeaderClock>
        <h1>
          {`${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`}
        </h1>
        <p>{`${WeekDay[currentDate.getDay()]}, ${currentDate.getDate()} de ${Month[currentDate.getMonth()]} de ${currentDate.getFullYear()}`}</p>
      </HeaderClock>
      <HeaderWeather>
        <p>Passo Fundo - RS</p>
        <div>
          <img src='images/weather.png' alt='weather img'></img>
          <h1>22º</h1>
        </div>
      </HeaderWeather>
    </Header>
  )
}

export default HomeHeader;