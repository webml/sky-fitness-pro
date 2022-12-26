import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Main = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`;

export const UserPic = styled.div`
    cursor: pointer;
    width: 35px;
    height: 35px;
    background: #d9d9d9;
    border-radius: 50%;
`;
export const UserName = styled.p`
    padding-left: 15px;
    padding-right: 12px;
    font-size: 24px;
    font-weight: 400;
    color: ${props => props.$location === '/' && '#FFFFFF'}
`;

export const UserInfoBtn = styled.button`
    border: solid ${props => props.$location === '/' ? '#FFFFFF' : '#000000'};
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    background-color: transparent;
    cursor: pointer;
`

export const UserNav = styled.nav` 
    position: absolute;
    top: 42px;
    right: -110px;
    background-color: lightgrey;
    border-radius: 8px;
`

export const NavigationLink = styled(NavLink)`
    text-decoration: none;
`

export const UserOptions = styled.ul`
    list-style: none;
    width: 100%;
    height: 100%;
`

export const UserOption = styled.li`
    border-bottom: 1px solid grey;
    color: black;
    font-size: 1rem;
    font-weight: 600;
    white-space: nowrap;
    padding: 4px 8px;

    :nth-last-child() {
        border: none;
    }

    :hover {
        background-color: grey;
    }
`