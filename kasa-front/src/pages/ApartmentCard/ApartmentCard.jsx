import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import colors from '../../utils/style/colors.jsx';
import ApartmentGallery from './ApartmentGallery.jsx';

import data from '../../data/logements.json';
import ApartmentTag from './ApartmentTag.jsx';

const Apartment = styled.div`
  height: 100%;
  max-width: 100%;
`;

const ApartmentContainer = styled.div`
  height: 100%;
  max-width: 100%;
  margin: 10px;
`;

const WrapperTitle = styled.div`
  height: 3em;
  width: 100%;
  margin: 20px;
`;

const ApartmentTitle = styled.h1`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 24px;
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 375px) {
    width: 100%;
  }
  @media screen and (min-width: 376px) {
    width: 50%;
  }
`;

const ApartmentLocation = styled.h2`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 375px) {
    width: 100%;
  }
  @media screen and (min-width: 376px) {
    width: 50%;
  }
`;

const ApartmentTagContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  @media screen and (max-width: 375px) {
    width: 100%;
  }
  @media screen and (min-width: 376px) {
    width: 50%;
  }
`;

function ApartmentCard() {
  let { apartmentId } = useParams();
  const filteredData = data.filter((dataIn) => dataIn.id === apartmentId);

  return (
    <Apartment>
      <Header />
      <ApartmentContainer>
        <ApartmentGallery id={apartmentId} />
        <WrapperTitle>
          <ApartmentTitle>{filteredData[0].title}</ApartmentTitle>
          <ApartmentLocation>{filteredData[0].location}</ApartmentLocation>
          <ApartmentTagContainer>
            {filteredData[0].tags.map((tag, i) => {
              return <ApartmentTag tag={tag} key={`${tag}-${i}`} />;
            })}
          </ApartmentTagContainer>
        </WrapperTitle>
      </ApartmentContainer>
      <Footer />
    </Apartment>
  );
}

export default ApartmentCard;
