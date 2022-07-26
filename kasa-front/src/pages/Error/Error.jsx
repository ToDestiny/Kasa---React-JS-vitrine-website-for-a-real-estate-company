import styled from 'styled-components';
import Header from '../../components/Header/Header.jsx';
import colors from '../../utils/style/colors';

const ErrorContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
`;

const ErrorH1 = styled.h1`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  line-height: 142.6%;
  display: flex;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 375px) {
    margin-top: 60px;
    font-size: 96px;
  }
  @media screen and (min-width: 376px) {
    font-size: 288px;
  }
`;

const ErrorH2 = styled.h2`
  margin: 0;
  width: 80%;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%;
  display: flex;
  @media screen and (max-width: 375px) {
    text-align: center;
    font-size: 18px;
  }
  @media screen and (min-width: 376px) {
    font-size: 36px;
    align-items: flex-end;
  }
`;

const ErrorLink = styled.a`
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%;
  text-decoration-line: underline;
  display: flex;
  align-items: flex-end;
  &:visited {
    color: ${colors.primary};
  }
  @media screen and (max-width: 375px) {
    margin-top: 120px;
    font-size: 14px;
  }
  @media screen and (min-width: 376px) {
    margin-top: 100px;
    font-size: 18px;
  }
`;

function Error() {
  return (
    <>
      <Header />
      <ErrorContainer>
        <ErrorH1>404</ErrorH1>
        <ErrorH2>Oups! La page que vous demandez n'existe pas.</ErrorH2>
        <ErrorLink href="/">Retourner sur la page d'acceuil</ErrorLink>
      </ErrorContainer>
    </>
  );
}

export default Error;
