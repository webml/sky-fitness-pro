import styled from "styled-components";

export const Container = styled.div`
  margin-top: 75px;
  margin-left: calc(50% - 580px);
  margin-right: calc(50% - 580px);
  height: 310px;
  max-width: 1160px;
  border-radius: 30px;
  background-image: url(${(props) => props.background});
  background-position: top -100px right 48px;
  background-repeat: no-repeat;
  background-color: rgba(205, 205, 205, 0.1);
`;

export const Title = styled.h1`
  padding: 30px;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
`;
