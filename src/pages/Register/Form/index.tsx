import styled from 'styled-components';
import UserFormInput from '../Inputs/';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.div`
padding: 10.26% 13.44% 10.26% 14.84%;
width: 50vw;
color: #E0E0E0;
@media screen and (max-height: 1000px) {
  padding-top: 5%;
}
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
  transition: all 0.5s ease-out;
`

const PasswordHintsList = styled.ul`
  box-sizing: border-box;
  padding: 5%;
`

const PasswordHint = styled.li`
  list-style-type: '✕ ';
  color: red;
  &.valid {
    color: green;
    list-style-type: '✓ ';
  }
`


const LoginP = styled.p`
  margin-top: 10px;
  text-align: center;
  max-width: 90.88%;
  a {
    color: #E9B425;
  }
`

const RegisterForm = () => {
  const history = useNavigate();

  let hadError: Boolean;
  let userInput: HTMLInputElement | null;
  let pwInput: HTMLInputElement | null;
  let errorMsg: HTMLParagraphElement | null;

  function adjustIcons() {
    let userIcon: HTMLImageElement | null = document.querySelector('.userIcon');
    let pwIcon: HTMLImageElement | null = document.querySelector('.pwIcon');
    if (userIcon && pwIcon) {
      userIcon.style.marginRight = '3vw';
      pwIcon.style.marginRight = '3vw';
    }
  }
  function errorMessage(userInput: HTMLInputElement | null, pwInput: HTMLInputElement | null, errorMsg: HTMLParagraphElement | null) {
    if (userInput) {
      userInput.classList.add('error');
      userInput.style.borderColor = '#E9B425';
    }
    if (pwInput) {
      pwInput.classList.add('error')
      pwInput.style.borderColor = '#E9B425';
    }
    if (errorMsg) {
      errorMsg.style.display = 'flex';
    }
    hadError = true;
  }
  return (
    <FormContainer>
      <Form>
        <Welcome><h1>Olá,</h1><p>Para continuar navegando de forma segura, efetue o seu cadastro</p></Welcome>
        <h2>Cadastro</h2>
        <InputContainer>
          <UserFormInput type='email' className='userName' placeholder='Usuário' onChange={adjustIcons} />
          <IconContainer>
            <InputIcon src='images/icon-user.svg' className='userIcon' />
          </IconContainer>
        </InputContainer>
        <InputContainer>
          <UserFormInput type='password' className='userPw' placeholder='Senha' onChange={adjustIcons} />
          <IconContainer>
            <InputIcon src='images/icon-password.svg' className='pwIcon' />
          </IconContainer>
        </InputContainer>
        <PasswordHintsList>
          <PasswordHint>Letra Maiúscula</PasswordHint>
          <PasswordHint>Letra Minúscula</PasswordHint>
          <PasswordHint>Número</PasswordHint>
          <PasswordHint>6 Dígitos</PasswordHint>
        </PasswordHintsList>
        <UserFormInput type='submit' name='userSubmit' value='Cadastrar' onClick={(event) => {
          event.preventDefault();
          if (!hadError) {
            userInput = document.querySelector('.userName');
            pwInput = document.querySelector('.userPw');
            errorMsg = document.querySelector('.errorMsg');
            errorMessage(userInput, pwInput, errorMsg);
          } else {
            history('/home');
          }

        }} />
        <LoginP>Já possui uma conta? Entre <a href='/'>aqui</a>.</LoginP>
      </Form>
    </FormContainer>
  )
}
export default RegisterForm;