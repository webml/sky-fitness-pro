import React from "react";
import { modalHandler, setCurrentModal } from "../../../store/slices/modalSlice";
import { useDispatch } from "react-redux";
import { createUser, getUser, setIsUser } from "../../../store/slices/userSlice";

import * as S from './styles'
import { useNavigate } from "react-router-dom";

const Button = ({title}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleClick = () => {
        if(title === 'Зарегистрироваться'){
            dispatch(createUser())
            dispatch(setIsUser(true))
            dispatch(modalHandler())
        }
        if(title === 'Войти') {
            dispatch(getUser())
            navigate('/profile')
            dispatch(modalHandler())
            return
        }
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