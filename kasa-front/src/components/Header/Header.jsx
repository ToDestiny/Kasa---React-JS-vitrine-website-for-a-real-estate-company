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
  @media screen and (max-width: 375px) {
    margin: 10px;
  }
  @media screen and (min-width: 376px) {
    margin: 20px;
  }
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
  a {
    all: unset;
  }
  a:hover {
    text-decoration: underline;
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
