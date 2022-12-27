import React from "react";
import { modalHandler, setCurrentModal } from "../../../store/slices/modalSlice";
import { useDispatch } from "react-redux";

import * as S from './styles'

const Button = ({title}) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        if(title !== 'Сохранить'){
            dispatch(setCurrentModal(title))
        }
        dispatch(modalHandler())
    }
    
    return(
        <S.Button
            onClick={handleClick}
        >
            {title}
        </S.Button>
    )
}

export default Button