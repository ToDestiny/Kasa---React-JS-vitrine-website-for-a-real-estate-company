import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CollapseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 50px;
  margin: 20px 0;
`;

const CollapseTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3em;
  width: 80%;
  border-radius: 5px;
  background-color: ${colors.primary};
  color: ${colors.white};
  & h2 {
    margin-left: 10px;
    font-size: 20px;
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
  width: 80%;
  background-color: ${colors.secondary};
  border-radius: 5px;
  color: ${colors.primary};
  & p {
    font-size: 16px;
    font-weight: 400;
    line-height: 34px;
    margin: 10px;
  }
`;

function AProposCollapse({ open, title, text }) {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <CollapseContainer>
      <CollapseTitle>
        <h2>{title}</h2>
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

export default AProposCollapse;
