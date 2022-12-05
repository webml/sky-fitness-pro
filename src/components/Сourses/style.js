import styled, { css } from "styled-components";

const topic = (name) => {
  if (name === "Йога") {
    return css`
      background-image: url(${process.env.PUBLIC_URL + "/courses/purple.png"});
    `;
  }
  if (name === "Стретчинг") {
    return css`
      background-image: url(${process.env.PUBLIC_URL + "/courses/blue.png"});
    `;
  }
  if (name === "Танцевальный фитнес") {
    return css`
      background-image: url(${process.env.PUBLIC_URL + "/courses/orange.png"});
    `;
  }
  if (name === "Степ-аэробика") {
    return css`
      background-image: url(${process.env.PUBLIC_URL + "/courses/green.png"});
    `;
  }
  if (name === "Бодифлекс") {
    return css`
      background-image: url(${process.env.PUBLIC_URL +
      "/courses/leightBlue.png"});
    `;
  }
  return css``;
};
export const Box = styled.div`
  ${(props) => topic(props.name)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 360px;
  height: 480px;

  display:flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 10px -10px 16px rgba(0, 0, 0, 0.1),
    -10px 10px 15.9988px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 30px;
  :hover {
    transition-duration: 0.80s;
    transform: scale(1.05);
    box-shadow: 0 0 5px #c4c4c4;
`;
export const Name = styled.div`
  width: 290px;
  height: 120px;

  font-family: "Abhaya Libre ExtraBold";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 110%;

  letter-spacing: -0.5px;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #000000;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const BottomUp = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 24px 9px;
  gap: 8px;
  border: none;
  width: 170px;
  height: 43px;
  background: #c7e957;
  border-radius: 80px;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #000000;
  :hover {
    background: #daf289;
  }
  :active {
    background: #ebffab;
  }
`;
