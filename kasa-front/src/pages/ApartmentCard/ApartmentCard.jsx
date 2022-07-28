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

const Wrapper = styled.div`
  height: 100%;
  max-width: 100%;
  display: flex;
  margin: 20px;
  flex-direction: row;
`;

const WrapperLeft = styled.div`
  height: 100%;
  @media screen and (max-width: 375px) {
    width: 100%;
  }
  @media screen and (min-width: 376px) {
    width: 70%;
  }
`;

const WrapperRight = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-top: 10px;
  @media screen and (max-width: 375px) {
    width: 100%;
  }
  @media screen and (min-width: 376px) {
    width: 30%;
  }
`;

const ApartmentTitle = styled.h1`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 24px;
  display: flex;
  align-items: flex-end;
`;

const ApartmentLocation = styled.h2`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: flex-end;
`;

const ApartmentTagContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ApartmentOwnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const ApartmentOwnerName = styled.div`
  text-align: right;
  font-weight: 500;
  margin-right: 10px;
  color: ${colors.primary};
`;

const ApartmentOwnerImg = styled.img`
  height: 3em;
  border-radius: 50px;
`;

function ApartmentCard() {
  let { apartmentId } = useParams();
  const filteredData = data.filter((dataIn) => dataIn.id === apartmentId);

  return (
    <Apartment>
      <Header />
      <ApartmentContainer>
        <ApartmentGallery id={apartmentId} />
        <Wrapper>
          <WrapperLeft>
            <ApartmentTitle>{filteredData[0].title}</ApartmentTitle>
            <ApartmentLocation>{filteredData[0].location}</ApartmentLocation>
            <ApartmentTagContainer>
              {filteredData[0].tags.map((tag, i) => {
                return <ApartmentTag tag={tag} key={`${tag}-${i}`} />;
              })}
            </ApartmentTagContainer>
          </WrapperLeft>
          <WrapperRight>
            <ApartmentOwnerContainer>
              <ApartmentOwnerName>
                {filteredData[0].host.name}
              </ApartmentOwnerName>
              <ApartmentOwnerImg
                src={filteredData[0].host.picture}
                alt="Owner's picture"
              />
              {console.log(filteredData[0].host.picture)}
            </ApartmentOwnerContainer>
          </WrapperRight>
        </Wrapper>
      </ApartmentContainer>
      <Footer />
    </Apartment>
  );
}

export default ApartmentCard;
