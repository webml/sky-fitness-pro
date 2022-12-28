import React from "react";
import {
  modalHandler,
  setCurrentModal,
} from "../../../store/slices/modalSlice";
import { useDispatch } from "react-redux";

import { createUser, getUser, setIsUser, addCourse, updateUserCourses, updateUserData } from "../../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import * as S from './styles'

const Button = ({title, id=null}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleClick = () => {
        if(title !== 'Сохранить'){
            dispatch(setCurrentModal(title))
        }
        if(title === 'Сохранить') {
            dispatch(updateUserData())
        }
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
=======

import * as S from "./styles";

const Button = ({ title, onClick }) => {
  //   const dispatch = useDispatch();
  //   const handleClick = () => {
  //     if (title !== "Сохранить") {
  //       dispatch(setCurrentModal(title));
  //     }
  //     dispatch(modalHandler());
  //   };


  return <S.Button onClick={onClick}>{title}</S.Button>;
};

export default Button;
