import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const HomeListCardContainer = styled.div`
  margin: 20px;

  border-radius: 10px;
  color: ${colors.white};
  position: relative;
  text-align: center;
  @media screen and (max-width: 375px) {
    height: 255px;
    max-width: 335px;
  }
  @media screen and (min-width: 376px) {
    height: 340px;
    max-width: 340px;
  }
`;

const HomeListCardImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const HomeListCardText = styled.div`
  position: absolute;
  top: 85%;
  left: 5%;
  font-size: 12pt;
  text-align: left;
`;

const HomeListCardLink = styled.a`
  text-decoration: none;
  color: ${colors.white};
`;

function HomeListCard({ title, cover, id }) {
  return (
    <HomeListCardContainer>
      <HomeListCardLink href={'/' + id}>
        <HomeListCardText>{title}</HomeListCardText>
        <HomeListCardImg src={cover} alt={title} />
      </HomeListCardLink>
    </HomeListCardContainer>
  );
}

export default HomeListCard;
