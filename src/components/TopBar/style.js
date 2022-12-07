import styled from "styled-components";

export const  Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 24px;

`;
export const SubDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const UserPic = styled.img`
    cursor: pointer;
`;
export const UserName = styled.p`
    padding-left: 15px;
    padding-right: 12px;
    font-size: 24px;
    font-weight: 400;
`;

export const UserInfoBtn = styled.button`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    background-color:transparent;
    cursor: pointer;
`