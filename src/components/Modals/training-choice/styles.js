import styled from "styled-components";

export const TrainingChoice = styled.div`
  width: 444px;
  height: 626px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 56px;
  position: relative;
`;

export const TrainingChoiceTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #000000;
`;

export const TrainingListWrapper = styled.div`
  overflow-y: scroll;
  padding-right: 18px;
  position: absolute;
  top: 116px;
  left: 83px;
  height: 74%;

  ::-webkit-scrollbar {
    width: 10px;

    background: rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
  }
`;

export const TrainingList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
