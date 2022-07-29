import styled from 'styled-components';
import colors from '../../utils/style/colors';

const RatingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 5px 0;
  @media screen and (max-width: 375px) {
    height: 100%;
  }
  @media screen and (min-width: 376px) {
    height: 100%;
  }
`;

const StarFull = styled.i`
  color: ${colors.primary};
  & i {
    margin: 0 5px;
  }
`;

function ApartmentRating({ rating }) {
  const renderSwitch = (rating) => {
    switch (rating) {
      case '0':
        return (
          <StarFull>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </StarFull>
        );
      case '1':
        return (
          <StarFull>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </StarFull>
        );
      case '2':
        return (
          <StarFull>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </StarFull>
        );
      case '3':
        return (
          <StarFull>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </StarFull>
        );
      case '4':
        return (
          <StarFull>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </StarFull>
        );
      case '5':
        return (
          <StarFull>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </StarFull>
        );
      default:
        return 'error';
    }
  };

  return <RatingContainer>{renderSwitch(rating)}</RatingContainer>;
}

export default ApartmentRating;
