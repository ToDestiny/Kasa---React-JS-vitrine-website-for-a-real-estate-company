import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import colors from '../../utils/style/colors';

import Logo from '../../assets/logo/logo.svg';

const NavContainer = styled.header`
  height: 4em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primary};
  color: ${colors.text};
`;

const LogoImg = styled.img`
  @media screen and (max-width: 375px) {
    height: 2em;
    width: 6em;
  }
  @media screen and (min-width: 376px) {
    height: 3em;
    width: 10em;
  }
`;

const NavBar = styled.nav`
  width: 11em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  a {
    all: unset;
  }
  @media screen and (max-width: 375px) {
    font-size: 8pt;
  }
  @media screen and (min-width: 376px) {
    font-size: 16pt;
  }
`;

function Header() {
  return (
    <nav>
      <NavContainer>
        <LogoImg src={Logo} alt="Kasa logo" />
        <NavBar>
          <MediaQuery maxWidth={375}>
            <Link to="/">ACCUEIL</Link>
            <Link to="/apropos">A PROPOS</Link>
          </MediaQuery>
          <MediaQuery minWidth={376}>
            <Link to="/">Accueil</Link>
            <Link to="/apropos">A Propos</Link>
          </MediaQuery>
        </NavBar>
      </NavContainer>
    </nav>
  );
}

export default Header;
