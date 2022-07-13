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
        <h1>22º</h1>
      </HeaderWeather>
    </Header>
  )
}

export default HomeHeader;