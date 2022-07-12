import React from 'react';
import styled from 'styled-components';

export const UserFormInput = styled.input`
  max-height: 60px;
  background: none;
  border-radius: 50px;
  padding: 20px;
  border: 1px solid #FFF;
  width: 90.88%;
  color: #FFF;
  &[type='email'] {

  }
  &[type='password'] {

  }
  &[type='submit'] {
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: 5px 5px 15px 0 rgba(0,0,0,.5);
    margin-top: 29.487%;
  }
`;

export default UserFormInput;