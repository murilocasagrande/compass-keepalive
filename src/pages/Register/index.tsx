import styled from 'styled-components';

import RegisterForm from './Form';


const RegisterPage = styled.section`
display: flex;
background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
height: 100vh;
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
  return (
    <RegisterPage>
      <RegisterForm />
      <RegisterAside>
        <RegisterLogo src='images/compasso-logo.png' />
      </RegisterAside>
    </RegisterPage>
  )
}

export default Register;