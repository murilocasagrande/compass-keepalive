import React from 'react';
import styled from 'styled-components';
import UserFormInput from './Inputs/';
const LoginPage = styled.section`
display: flex;
background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
height: 100vh;
`
const FormContainer = styled.div`
padding: 10.26% 14.84%;
width: 50vw;
color: #FFF;
@media screen and (max-height: 800px) {
  padding: 5% 14.84%;
}
`
const LoginForm = styled.form`
  width: 100%;
  height: 100%;
`
const Welcome = styled.p`
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
`
const InputContainer = styled.div`
  margin-top: 8.205%;
`
const Login = () => {
  return (
    <LoginPage>
      <FormContainer>
        <LoginForm>
          <Welcome><h1>Olá,</h1>Para continuar navegando de forma segura, efetue o login na rede</Welcome>
          <h2>Login</h2>
          <InputContainer>
            <UserFormInput type='email' name='userName' placeholder='Usuário' />
          </InputContainer>
          <InputContainer>
            <UserFormInput type='password' name='userPw' placeholder='Senha' />
          </InputContainer>
          <UserFormInput type='submit' name='userSubmit' value='Continuar' />
        </LoginForm>
      </FormContainer>
      <LoginAside>
        <div>

        </div>
      </LoginAside>
    </LoginPage>
  )
}
export default Login;