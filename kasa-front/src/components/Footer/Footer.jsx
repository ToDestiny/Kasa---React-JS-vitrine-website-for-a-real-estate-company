import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

import Logo from '../../assets/logo/logo-white.svg';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  height: 6em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.black};
  color: ${colors.white};
`;

const LogoImg = styled.img`
  height: 2em;
  width: 5em;
  padding-top: 10px;
  @media screen and (max-width: 375px) {
    height: 2em;
  }
  @media screen and (min-width: 376px) {
    height: 3em;
  }
`;

const FooterText = styled.h3`
  height: 2em;
  @media screen and (max-width: 375px) {
    font-size: 6pt;
    font-weight: 500;
  }
  @media screen and (min-width: 376px) {
    font-size: 8pt;
    font-weight: 600;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <LogoImg src={Logo} alt="Kasa logo" />
      <FooterText>© 2020 Kasa. All rights reserved</FooterText>
    </FooterContainer>
  );
}

export default Footer;
