import { useEffect, useState } from 'react';
import styled from 'styled-components';

import RegisterForm from './Form';


const RegisterPage = styled.section`
display: flex;
background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
height: 100vh;
& > .hidden {
  display: none;
}
`

const RegisterAside = styled.section`
  height: 100vh;
  width: 50vw;
  background: url('images/login-bkgd.png');
  background-size: cover;
  text-align: center;
`
const RegisterLogo = styled.img`
  max-width: 31.875%;
  // max-height: 6.39%;
  margin-top: 3.24%;
`

const Register = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const windowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.onresize = windowResize;

  })
  return (
    <RegisterPage>
      <RegisterForm />
      <RegisterAside className={width > 850 ? '' : 'hidden'}>
        <RegisterLogo src='images/compasso-logo.png' />
      </RegisterAside>
    </RegisterPage>
  )
}

export default Register;