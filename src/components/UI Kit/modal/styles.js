import styled from "styled-components";

export const Modal = styled.div`
    height:100vh;
    width:100vw;
    background-color:rgba(0,0,0,0.4);
    position: fixed;
    top:0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalContent = styled.div`
    background: white;
    border-radius: 12px;
`