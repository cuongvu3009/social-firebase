import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

const Navbar = () => {
  return (
    <Wrapper>
      <Link to='/' className='styledLink'>
        <Logo />
      </Link>
      <Right>
        <Link to='/login' className='styledLink'>
          <Text>Login</Text>
        </Link>
        <Link to='/signup' className='styledLink'>
          <Text>Signup</Text>
        </Link>
      </Right>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const Text = styled.p`
  font-size: large;
  font-weight: 400;
  cursor: pointer;
`;
