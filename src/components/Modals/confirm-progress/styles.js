import styled from "styled-components";
import handOk from '../../../img/hand-ok.jpg'

export const ModalBox = styled.div`
    width: 444px;
    height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
`

export const ModalTitle = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
`

export const ModalImg = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${handOk});
    background-position: top 15px left 110px; 
    background-repeat: no-repeat;
    background-size: 44%;
`

