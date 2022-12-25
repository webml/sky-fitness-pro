import React from "react";
import Form from '../form'
import FormInput from "../form-input";
import Button from '../../UI Kit/button'

import * as S from './styles'
import { BlackLogo } from "../../logo/blackLogo";
import { useDispatch } from "react-redux";
import { setIsUser } from "../../../store/slices/userSlice";

const LoginAndSignUp = ({isUser}) => {
    const dispatch = useDispatch()

    const handleIsUser = () => {
        localStorage.removeItem('sky-fitness-pro-userId')
        dispatch(setIsUser(false))
    }


    return(
        <Form>
            <BlackLogo/>
            <FormInput type='text' placeholder='Логин' name='login'/>
            {!isUser && <FormInput type='email' placeholder='E-mail' name='email' />}
            <FormInput type='password' placeholder='Пароль' name='password'/>
            <S.FormButtonBox>
                <Button title={!isUser ? 'Зарегистрироваться' : 'Войти'}/>
                {isUser && <S.SignUpButton onClick={() => handleIsUser()}>Зарегистрироваться</S.SignUpButton>}
            </S.FormButtonBox>
        </Form>
    )
}

export default LoginAndSignUp