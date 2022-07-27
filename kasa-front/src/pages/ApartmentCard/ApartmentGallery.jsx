import { useState } from 'react';

import styled from 'styled-components';
import colors from '../../utils/style/colors';

import data from '../../data/logements.json';

const ApartmentGalleryContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  @media screen and (max-width: 375px) {
    margin-right: 10px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  & i {
    color: ${colors.white};
  }
  @media screen and (max-width: 375px) {
    height: 15em;
  }
  @media screen and (min-width: 376px) {
    height: 30em;
  }
`;

const ApartmentGalleryImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const ButtonLeft = styled.div`
  position: relative;
  top: 50%;
  left: 5%;
`;

const ButtonRight = styled.div`
  position: relative;
  top: 50%;
  right: 5%;
  @media screen and (max-width: 375px) {
    right: 8%;
  }
`;

function ApartmentGallery({ id }) {
  const filteredData = data.filter((dataIn) => dataIn.id === id);
  const l = filteredData[0].pictures.length;
  const [count, setCount] = useState(0);

  function leftImg() {
    if (!count) {
      setCount(l - 1);
    } else {
      setCount(count - 1);
    }
  }

  function rightImg() {
    if (count < l - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }

  return (
    <ApartmentGalleryContainer>
      <Wrapper>
        <ButtonLeft onClick={leftImg}>
          <i className="fas fa-chevron-left fa-xl"></i>
        </ButtonLeft>
        <ApartmentGalleryImg src={filteredData[0].pictures[count]} />
        <ButtonRight onClick={rightImg}>
          <i className="fas fa-chevron-right fa-xl"></i>
        </ButtonRight>
      </Wrapper>
    </ApartmentGalleryContainer>
  );
}

export default ApartmentGallery;
