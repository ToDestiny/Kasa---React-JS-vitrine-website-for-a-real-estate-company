import { useState } from 'react';

import styled from 'styled-components';
import colors from '../../utils/style/colors';

import data from '../../data/logements.json';

const ApartmentGalleryContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
`;

const Wrapper = styled.div`
  height: 20em;
  width: 100%;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  & i {
    color: ${colors.white};
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
`;

function ApartmentGallery({ id }) {
  const filteredData = data.filter((dataIn) => dataIn.id === id);
  const l = filteredData[0].pictures.length;
  const [count, setCount] = useState(0);

  function leftImg() {
    console.log(count);
    if (!count) {
      setCount(l - 1);
      console.log(count);
    } else {
      setCount(count - 1);
    }
  }

  function rightImg() {
    console.log(count);
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
