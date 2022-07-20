import styled from 'styled-components';
import UserFormInput from '../Inputs/';
import { useNavigate } from 'react-router-dom';
// import { createUser } from 'common/ts/Register';
import { useState } from 'react';

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

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [userIsValid, setUserIsValid] = useState(false);
  const [pwIsValid, setPwIsValid] = useState(false);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userIsValid && pwIsValid) {
      const userData = JSON.stringify({ user: user, password: password })
      try {
        let res = await fetch("http://127.0.0.1:3000/users", {
          method: "POST",
          body: userData,
          headers: new Headers({ 'Content-Type': 'Application/Json' })
        });
        console.log(res.body);
        let resJson = await res.json();
        console.log(resJson);

        if (res.status === 201) {
          alert(`Usuário: ${user}, senha: ${password} foi cadastrado com sucesso`);
          history('/');
        } else {
          alert("Ocorreu algum erro ao cadastrar.");
        }
      } catch (error) {
        alert(error);
      }
    } else {
      alert('Usuário ou senha inválidos');
    }

  }

  const history = useNavigate();
  const userRegExp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

  let userInput: HTMLInputElement | null
    , pwInput: HTMLInputElement | null
    , upperHint: HTMLLIElement | null
    , lowerHint: HTMLLIElement | null
    , numberHint: HTMLLIElement | null
    , lengthHint: HTMLLIElement | null;

  function adjustIcons() {
    let userIcon: HTMLImageElement | null = document.querySelector('.userIcon');
    let pwIcon: HTMLImageElement | null = document.querySelector('.pwIcon');
    if (userIcon && pwIcon) {
      userIcon.style.marginRight = '3vw';
      pwIcon.style.marginRight = '3vw';
    }
  }

  function getHints() {
    if (!upperHint || !lowerHint || !numberHint || !lengthHint) {
      upperHint = document.querySelector('#upperHint');
      lowerHint = document.querySelector('#lowerHint');
      numberHint = document.querySelector('#numberHint');
      lengthHint = document.querySelector('#lengthHint');
    }
  }

  function validateFields() {
    adjustIcons();

    userInput = document.querySelector('.userName');
    pwInput = document.querySelector('.userPw');
    getHints();

    if (userInput?.value) {
      setUserIsValid(userRegExp.test(userInput.value) ? true : false);

    }


    if (pwInput?.value) {
      let i = 0;
      if (/([A-Z])/.test(pwInput.value)) {
        upperHint?.classList.add('valid');
        i++;
      }
      if (/([a-z])/.test(pwInput.value)) {
        lowerHint?.classList.add('valid');
        i++;
      }
      if (/([0-9])/.test(pwInput.value)) {
        numberHint?.classList.add('valid');
        i++;
      }
      if (pwInput.value.length >= 6) {
        lengthHint?.classList.add('valid');
        i++;
      }
      if (i === 4) {
        setPwIsValid(true)
      }
    }
  }
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Welcome><h1>Olá,</h1><p>Para continuar navegando de forma segura, efetue o seu cadastro</p></Welcome>
        <h2>Cadastro</h2>
        <InputContainer>
          <UserFormInput type='email' name='user' className='userName' placeholder='Usuário' onChange={(e) => {
            setUser(e.target.value)
            validateFields();
          }} required />
          <IconContainer>
            <InputIcon src='images/icon-user.svg' className='userIcon' />
          </IconContainer>
        </InputContainer>
        <InputContainer>
          <UserFormInput type='password' name='password' className='userPw' placeholder='Senha' onChange={(e) => {
            setPassword(e.target.value)
            validateFields();
          }} required />
          <IconContainer>
            <InputIcon src='images/icon-password.svg' className='pwIcon' />
          </IconContainer>
        </InputContainer>
        <PasswordHintsList>
          <h3>A senha deve possuir, no mínimo:</h3>
          <PasswordHint id='upperHint'>Letra Maiúscula</PasswordHint>
          <PasswordHint id='lowerHint'>Letra Minúscula</PasswordHint>
          <PasswordHint id='numberHint'>Número</PasswordHint>
          <PasswordHint id='lengthHint'>6 Dígitos</PasswordHint>
        </PasswordHintsList>
        <UserFormInput type='submit' name='userSubmit' value='Cadastrar' />
        <LoginP>Já possui uma conta? Entre <a href='/'>aqui</a>.</LoginP>
      </Form>
    </FormContainer>
  )
}
export default RegisterForm;