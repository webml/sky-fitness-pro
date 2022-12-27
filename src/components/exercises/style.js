import styled from "styled-components";


export const Main = styled.div`
    padding-right: 94px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

export const  Header = styled.header`
    padding-bottom: 20px;
    font-size: 32px;
    font-weight: 400;

`;
export const List = styled.ul`
    list-style:inside;
    padding-left: 10px;
`;

export const ListItem = styled.li`
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
`;

export const ProgressBtn = styled.button`
    font-size: 18px;
    font-weight: 400;
    margin-top: 40px;
    color: #FAFAFA;
    background-color: #580EA2;
    padding: 16px 28px;
    border: solid #580EA2;
    border-radius: 46px;
    cursor: pointer;
`;
