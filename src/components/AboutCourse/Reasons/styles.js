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
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 40px;
`;

export const List = styled.ol`
  list-style: none;
  counter-reset: li;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

  li {
    counter-increment: li;
    display: flex;
    width: 33%;
    font-size: 24px;
    line-height: 32px;
  }

  li p {
    margin: 0;
    width: 244px;
  }

  li::before {
    content: counter(li);
    min-width: 68px;
    height: 68px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    line-height: 40px;
    margin-right: 24px;
    background: #c7e957;
  }
`;
