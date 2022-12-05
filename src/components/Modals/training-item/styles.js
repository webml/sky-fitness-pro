import styled from "styled-components";

export const TrainingListItem = styled.li`

    position: relative;
    flex: 0 1 76px;
    width: 278px;
    border: 1px solid;
    border-color: ${props => props.$completed ? '#06B16E' : 'inherit'};
    border-radius: 26px;
    text-align: center;
    padding: 11px 27px 17px;
    color: ${props => props.$completed ? '#06B16E' : 'inherit'};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
`

export const ItemTitle = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.05px;

    max-width: 188px; 
`

export const CustomCheckbox = styled.img`
    position: absolute;
    top: 12px;
    right: 15px;
    width: 27px;
    height: 25px;
`

export const ItemDescription = styled.div``

export const DaySpan = styled.span`
    margin-bottom: 6px;
`

export const StyledSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.001em;
`


export const CourseTile = styled(DaySpan)`
    ::after {
        content: "/";
        margin: 0px 0.2rem;
    }
`