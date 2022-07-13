import styled from 'styled-components';
import UserFormInput from '../Inputs/';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.div`
padding: 10.26% 13.44% 10.26% 14.84%;
width: 50vw;
color: #E0E0E0;
@media screen and (max-height: 800px) {
  padding: 5% 14.84%;
}
`
const Form = styled.form`
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
const InputContainer = styled.div`
  position: relative;
  margin-top: 8.205%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`
const IconContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 30%;
`
const InputIcon = styled.img`
  height: 20px;
  width: 20px;
`

const LoginForm = () => {
  const history = useNavigate();
  return (
    <FormContainer>
      <Form>
        <Welcome><h1>Olá,</h1><p>Para continuar navegando de forma segura, efetue o login na rede</p></Welcome>
        <h2>Login</h2>
        <InputContainer>
          <UserFormInput type='email' name='userName' placeholder='Usuário' />
          <IconContainer>
            <InputIcon src='images/icon-user.svg' />
          </IconContainer>
        </InputContainer>
        <InputContainer>
          <UserFormInput type='password' name='userPw' placeholder='Senha' />
          <IconContainer>
            <InputIcon src='images/icon-password.svg' />
          </IconContainer>
        </InputContainer>
        <UserFormInput type='submit' name='userSubmit' value='Continuar' onClick={() => history('/home')} />
      </Form>
    </FormContainer>
  )
}
export default LoginForm;