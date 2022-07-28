import styled from 'styled-components';
import colors from '../../utils/style/colors';

const TagContainer = styled.div`
  margin: 0 2px;
  border-radius: 25px;
  background-color: ${colors.primary};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 375px) {
    height: 1em;
    width: 6em;
  }
  @media screen and (min-width: 376px) {
    height: 1.5em;
    width: 7em;
  }
`;

const TagText = styled.p`
  font-weight: 500;

  @media screen and (max-width: 375px) {
    font-size: 8px;
  }
  @media screen and (min-width: 376px) {
    font-size: 10px;
  }
`;

function ApartmentTag({ tag }) {
  return (
    <TagContainer>
      <TagText>{tag}</TagText>
    </TagContainer>
  );
}

export default ApartmentTag;
