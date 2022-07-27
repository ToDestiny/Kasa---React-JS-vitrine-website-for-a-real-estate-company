import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

import data from '../../data/logements.json';
import HomeListCard from './HomeListCard';

const HomeListContainer = styled.div`
  height: 100%;
  margin: 20px;
  padding: 20px 10px;
  background-color: ${colors.background};
  color: ${colors.black};
  border-radius: 25px;
  display: grid;
  gap: 1px;

  justify-items: center;
  align-items: center;
  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 376px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

function HomeList() {
  return (
    <HomeListContainer>
      {data.map((dataIn) => (
        <HomeListCard
          key={dataIn.id}
          title={dataIn.title}
          cover={dataIn.cover}
          id={dataIn.id}
        />
      ))}
    </HomeListContainer>
  );
}

export default HomeList;
