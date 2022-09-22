import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import styled from 'styled-components';

const Logo = () => {
  return (
    <Wrapper>
      <FaDiscord size={35} />
      <h2>Social</h2>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
`;
