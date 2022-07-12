import React from 'react';
import styled from 'styled-components';

const LoginPage = styled.section`
display: flex;
background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
height: 100vh;
`
const FormContainer = styled.div`
padding: 10.26% 14.84%;
width: 50vw;
`
const LoginForm = styled.form`
  width: 100%
`

const Welcome = styled.p`
text-align: left;  
color: #FFF;
  h1 {
    font-weight: 300;
    font-size: 3.75rem;
  }
`

const LoginAside = styled.section`
  height: 100vh;
  width: 50vw;
  background: url('images/login-background.png');
  background-size: cover;
`

const Login = () => {
  return (
    <LoginPage>
      <FormContainer>
        <LoginForm>
          <Welcome><h1>Olá,</h1>Para continuar navegando de forma segura, efetue o login na rede</Welcome>
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