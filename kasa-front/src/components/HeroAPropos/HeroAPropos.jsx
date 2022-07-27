import React from 'react';
import styled from 'styled-components';

import Img from '../../assets/img/apropos-background.svg';

const HeroContainer = styled.div`
  margin: 0 20px 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 375px) {
    margin: 0 10px 20px 10px;
    height: 12em;
  }
  @media screen and (min-width: 376px) {
    height: 8em;
  }
`;

const HeroImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(70%);
  @media screen and (max-width: 375px) {
    border-radius: 10px;
  }
  @media screen and (min-width: 376px) {
    border-radius: 25px;
  }
`;

function HeroAPropos() {
  return (
    <HeroContainer>
      <HeroImg src={Img} alt="Hero background" />
    </HeroContainer>
  );
}

export default HeroAPropos;
