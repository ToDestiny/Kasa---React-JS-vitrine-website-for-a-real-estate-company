import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import MediaQuery from 'react-responsive';

import Img from '../../assets/img/home-background.svg';

const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  position: relative;
  text-align: center;
  @media screen and (max-width: 375px) {
    height: 6em;
  }
  @media screen and (min-width: 376px) {
    height: 8em;
  }
`;

const HeroImg = styled.img`
  height: 100%;
  width: 100%;
  margin: 20px;
  object-fit: cover;
  filter: brightness(70%);
  @media screen and (max-width: 375px) {
    border-radius: 10px;
  }
  @media screen and (min-width: 376px) {
    border-radius: 25px;
  }
`;

const HeroText = styled.div`
  position: absolute;
  @media screen and (max-width: 375px) {
    top: 18%;
    left: 10%;
    font-size: 18pt;
    text-align: left;
  }
  @media screen and (min-width: 376px) {
    text-align: center;
    font-size: 20pt;
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroImg
        className="img-responsive center-block"
        src={Img}
        alt="Hero background"
      />
      <MediaQuery maxWidth={375}>
        <HeroText>
          Chez vous, <br />
          partout et ailleurs
        </HeroText>
      </MediaQuery>
      <MediaQuery minWidth={376}>
        <HeroText>Chez vous, partout et ailleurs</HeroText>
      </MediaQuery>
    </HeroContainer>
  );
}

export default Hero;
