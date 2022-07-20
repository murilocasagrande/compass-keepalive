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

  function getWeather() {
    let url;
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude;
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=c922148e12e65d683d68dbbd1378af25`;
      fetchApi(url);
    });
  }
  function fetchApi(url: string) {
    let city = document.querySelector('#city');
    let temp = document.querySelector('#temperature');
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        let tempInCelsius = ((5 / 9) * (data.main.temp - 32)).toFixed(0);
        if (city && temp) {
          city.innerHTML = data.name;
          temp.innerHTML = tempInCelsius + 'º';
        }
      })
      .catch((err) => {
        if (city && temp) {
          city.innerHTML = 'Error';
          temp.innerHTML = '-';
        }
      })
  }

  getWeather();

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
        <p id='city'></p>
        <div>
          <img src='images/weather.png' alt='weather img'></img>
          <h1 id='temperature'></h1>
        </div>
      </HeaderWeather>
    </Header>
  )
}

export default HomeHeader;