import styled from 'styled-components';
import LoginForm from './Form';


const LoginPage = styled.section`
display: flex;
background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
height: 100vh;
`

const LoginAside = styled.section`
  height: 100vh;
  width: 50vw;
  background: url('images/login-bkgd.png');
  background-size: cover;
  text-align: center;
`
const LoginLogo = styled.img`
  max-width: 31.875%;
  // max-height: 6.39%;
  margin-top: 3.24%;
`
const Login = () => {
  return (
    <LoginPage>
      <LoginForm />
      <LoginAside>
        <LoginLogo src='images/compasso-logo.png' />
      </LoginAside>
    </LoginPage>
  )
}
export default Login;