import styled from "styled-components";

export const TrainingListItem = styled.li`
    flex: 0 1 76px;
    width: 278px;
    border: 1px solid;
    border-color: ${props => props.$done ? '06B16E' : 'inherit'};
    border-radius: 26px;
    text-align: center;
    padding: 11px 27px 17px;
    color: ${props => props.$done ? '06B16E' : 'inherit'};
`

export const ItemTitle = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.05px;
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

export const ItemDescription = styled(StyledSpan)`
    ::after {
        content: "/";
        margin: 0px 0.2rem;
    }
`