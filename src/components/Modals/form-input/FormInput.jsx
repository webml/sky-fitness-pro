import React from "react";
import { setUserEmail, setUserPassword, setUserName } from "../../../store/slices/userSlice";
import { useDispatch } from "react-redux";

import * as S from './styles'

const FormInput = ({name, type, placeholder}) => {
    const dispatch = useDispatch()

    const handleChange = (e) => {
        if(e.target.name === 'login'){
            dispatch(setUserName(e.target.value))
        }
        if(e.target.name === 'password'){
            dispatch(setUserPassword(e.target.value))
        }
        if(e.target.name === 'email'){
            dispatch(setUserEmail(e.target.value))
        }
    }

    return(
        <S.FormInput 
            onChange={(evt) => handleChange(evt)} 
            type={type} 
            placeholder={placeholder}
            name={name} 
        />
    )
}

export default FormInput