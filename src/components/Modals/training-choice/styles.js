import styled from "styled-components";

export const TrainingChoice = styled.div`
    width: 444px;
    height: 626px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 56px;
    position: relative;
`

export const TrainingChoiceTitle = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    color: #000000;
`

export const TrainingListWrapper = styled.div`
    padding-right: 24px; 
    position: absolute;
    top: 116px;
    left: 83px;
    height: 74%;

    .os-theme-dark.os-scrollbar>.os-scrollbar-track, 
    .os-theme-dark.os-scrollbar>.os-scrollbar-track>.os-scrollbar-handle, 
    .os-theme-light.os-scrollbar>.os-scrollbar-track, 
    .os-theme-light.os-scrollbar>.os-scrollbar-track>.os-scrollbar-handle {
        background: rgba(0, 0, 0, 0.15);
    }
`

export const TrainingList = styled.ul`
    display: flex;
    flex-direction: column;
    gap:12px;
`