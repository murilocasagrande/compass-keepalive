import styled from 'styled-components';
import { WeekDay, Month } from 'enums/DateEnums';
import { useEffect, useState } from 'react';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 30.28%;
  margin: 25px 40px 0 40px;
  & > .hidden{
    display:none;
  }
  @media screen and (max-width: 450px){
     margin: 25px 4% 0 4%;
   }
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
@media screen and (max-width: 350px) {
  img {
    // width: 15px;
    // height: 24px;
  }
  #temperature {
    font-size: 2rem;
  }
}
`

const HomeHeader = () => {
  let currentDate = new Date();

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const [isLoaded, setIsLoaded] = useState(false);

  const windowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
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

  useEffect(() => {

    if (!isLoaded) {
      setIsLoaded(true);
      getWeather();
    }
    window.onresize = windowResize;
  })

  return (
    <Header>
      <HeaderLogo src='images/compasso-logo-dark.png' />
      <HeaderClock className={width < 800 ? 'hidden' : ''}>
        <h1>
          {`${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`}
        </h1>
        <p>{`${WeekDay[currentDate.getDay()]}, ${currentDate.getDate()} de ${Month[currentDate.getMonth()]} de ${currentDate.getFullYear()}`}</p>
      </HeaderClock>
      {/* className={width < 450 ? 'hidden' : ''} */}
      <HeaderWeather >
        <p id='city'></p>
        <div>
          <img src='images/weather.png' alt='weather img'></img>
          <h1 id='temperature'>-</h1>
        </div>
      </HeaderWeather>
    </Header>
  )
}

export default HomeHeader;