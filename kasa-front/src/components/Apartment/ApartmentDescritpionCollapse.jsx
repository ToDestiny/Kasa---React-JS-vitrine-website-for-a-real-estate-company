import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CollapseContainer = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  line-height: 50px;
  margin: 20px 0;
  @media screen and (max-width: 375px) {
    width: 100%;
  }
  @media screen and (min-width: 376px) {
    width: 50%;
  }
`;

const CollapseTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3em;
  width: 95%;
  border-radius: 5px;
  background-color: ${colors.primary};
  color: ${colors.white};
  & h2 {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
  }
  & button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    margin-right: 10px;
  }
`;

const CollapseText = styled.div`
  width: 95%;
  background-color: ${colors.secondary};
  border-radius: 5px;
  color: ${colors.primary};
  & p {
    font-size: 12px;
    font-weight: 400;
    line-height: 26px;
    margin: 10px;
  }
`;

function ApartmentDescriptionCollapse({ open, text }) {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <CollapseContainer>
      <CollapseTitle>
        <h2>Description</h2>
        <button type="button" onClick={handleFilterOpening}>
          {!isOpen ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-up"></i>
          )}
        </button>
      </CollapseTitle>
      {isOpen ? (
        <CollapseText>
          <p>{text}</p>
        </CollapseText>
      ) : (
        <div></div>
      )}
    </CollapseContainer>
  );
}

export default ApartmentDescriptionCollapse;
