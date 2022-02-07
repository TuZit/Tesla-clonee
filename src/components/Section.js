import React from "react";
import styled from "styled-components";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Wrap bgImg={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>

      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>

        <DownArrow src="./images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  background-image: ${(props) => `url("./images/${props.bgImg}")`};
  z-index: 5;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index: 5;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.4rem;
    margin-top: 1rem;
  }
`;
const ButtonGroup = styled.button`
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
  background: transparent;
  border: none;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.2rem;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  padding: 1.4rem 2rem;
  width: 256px;
  color: #fff;
  border-radius: 10rem;
  border: none;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 1.2rem;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background: rgba(255, 255, 255, 0.65);
  color: #000;
`;

const DownArrow = styled.img`
  height: 4rem;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  text-align: center;
`;
