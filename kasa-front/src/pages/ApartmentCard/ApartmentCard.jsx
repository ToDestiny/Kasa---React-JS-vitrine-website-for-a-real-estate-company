import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ApartmentGallery from './ApartmentGallery.jsx';

//import data from '../../data/logements.json';

const Apartment = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

const ApartmentContainer = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

function ApartmentCard() {
  let { apartmentId } = useParams();
  return (
    <Apartment>
      <Header />
      <ApartmentContainer>
        <ApartmentGallery id={apartmentId} />
      </ApartmentContainer>
      <Footer />
    </Apartment>
  );
}

export default ApartmentCard;
