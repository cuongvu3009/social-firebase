import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Wrapper>
      <Form>
        <h2>Login</h2>
        <label htmlFor=''>Email</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor=''>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type='submit'>Login</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Form = styled.form`
  background-color: #fff;
  width: 19rem;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 15px;
`;

const Button = styled.button`
  margin-top: 15px;
  width: max-content;
  font-size: medium;
  padding: 5px;
  color: purple;
  background-color: transparent;
  border: 1px solid purple;
  cursor: pointer;
`;
