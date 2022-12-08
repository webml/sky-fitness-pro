import styled from "styled-components";

export const Container = styled.div`
  margin-top: 75px;
  max-width: 1160px;
  background-color: #f1f1f1;
  margin-left: calc(50% - 580px);
  margin-right: calc(50% - 580px);
  border-radius: 30px;
  background: url(${(props) => props.background});
`;

export const Header = styled.h3`
  margin-bottom: 40px;
  font-size: 40px;
  line-height: 48px;
`;

export const List = styled.ul`
  font-size: 24px;
  line-height: 32px;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 96px;
  column-gap: 88px;
`;
