import React from "react";
import { modalHandler, setCurrentModal } from "../../../store/slices/modalSlice";
import { useDispatch } from "react-redux";
import { createUser, getUser, setIsUser, addCourse, updateUserCourses } from "../../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import * as S from './styles'

const Button = ({title, id=null}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleClick = () => {
        if(title === 'Зарегистрироваться'){
            dispatch(createUser())
            dispatch(setIsUser(true))
            dispatch(modalHandler())
        }
        if(title === 'Войти') {
            dispatch(getUser())
            dispatch(modalHandler())
            return
        }
        if(title !== 'Сохранить'){
            dispatch(setCurrentModal(title))
        }
        if(title === 'Записаться на тренировку') {
            dispatch(addCourse(id))
            navigate('/profile')
            dispatch(updateUserCourses())
            return
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