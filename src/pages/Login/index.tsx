import styled from 'styled-components';
import UserFormInput from './Inputs/';
import { useNavigate } from 'react-router-dom';

const LoginPage = styled.section`
display: flex;
background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
height: 100vh;
`
const FormContainer = styled.div`
padding: 10.26% 13.44% 10.26% 14.84%;
width: 50vw;
color: #E0E0E0;
@media screen and (max-height: 800px) {
  padding: 5% 14.84%;
}
`
const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  text-align: left;
  h2 {
    font-size: 1.875rem;
  }
`
const Welcome = styled.div`
width: 72.18%;
text-align: left;
margin-bottom: 34.615%;
  h1 {
    font-weight: 300;
    font-size: 3.75rem;
  }
`
const LoginAside = styled.section`
  height: 100vh;
  width: 50vw;
  background: url('images/login-bkgd.png');
  background-size: cover;
  text-align: center;
`
const InputContainer = styled.div`
  margin-top: 8.205%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`
const InputIcon = styled.img`
  height: 20px;
  width: 20px;
`
const LoginLogo = styled.img`
  max-width: 31.875%;
  // max-height: 6.39%;
  margin-top: 3.24%;
`
const Login = () => {
  const history = useNavigate();
  return (
    <LoginPage>
      <FormContainer>
        <LoginForm>
          <Welcome><h1>Olá,</h1><p>Para continuar navegando de forma segura, efetue o login na rede</p></Welcome>
          <h2>Login</h2>
          <InputContainer>
            <UserFormInput type='email' name='userName' placeholder='Usuário' />
            <InputIcon src='images/icon-user.svg' />
          </InputContainer>
          <InputContainer>
            <UserFormInput type='password' name='userPw' placeholder='Senha' />
            <InputIcon src='images/icon-password.svg' />
          </InputContainer>
          <UserFormInput type='submit' name='userSubmit' value='Continuar' onClick={() => history('/home')} />
        </LoginForm>
      </FormContainer>
      <LoginAside>
        <LoginLogo src='images/compasso-logo.png' />
      </LoginAside>
    </LoginPage>
  )
}
export default Login;