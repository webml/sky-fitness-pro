import styled from "styled-components";

export const TrainingChoice = styled.div`
    width: 444px;
    height: 626px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 36px;
    padding-bottom: 58px;
    position: relative;
`

export const TrainingChoiceTitle = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    color: #000000;
`

export const TrainingList = styled.ul`
    position: absolute;
    top: 116px;
    left: 83px;
    height: 73%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
`