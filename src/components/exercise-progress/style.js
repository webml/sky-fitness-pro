import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
    border-radius: 30px;
`;
export const Header = styled.header`
    padding-bottom: 43px;
    padding-top: 30px;
    font-size: 32px;
    font-weight: 400;
    padding-left: 80px;
    padding-right: 80px;
`;
export const ListNameItem = styled.div`
    font-size: 24px;
    font-weight: 400;
    padding-right: 72px;
`;
export const List = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 30px;
`;
export const ListName = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 44px;
`;
export const ListProgress = styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-right: 55px;
`;
export const ListProgressItem  = styled.div`
    width: 278px;
    background: ${(props) => props.background};
    border: 2px solid #565EEF;
    border-radius: 22px;
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    text-align:center;
`;


