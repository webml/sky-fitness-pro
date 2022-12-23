import React from "react";
import Form from '../form'
import FormInput from "../form-input";
import Button from '../../UI Kit/button'

import * as S from './styles'
import { BlackLogo } from "../../logo/blackLogo";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const LoginAndSignUp = () => {
    const [auth,setAuth]=useState(true)

    return(
        <Form>
            <BlackLogo/>
            <FormInput type='text' placeholder='Логин' />
            <FormInput type='password' placeholder='Пароль' />
            {!auth && <FormInput type='password' placeholder='Повторите пароль'/>}
            <S.FormButtonBox>
                <NavLink to="/profile" ><Button title={!auth ? 'Зарегистрироваться' : 'Войти'}/> </NavLink>
                {auth && <S.SignUpButton onClick={()=>setAuth(!auth)}>Зарегистрироваться</S.SignUpButton>}
            </S.FormButtonBox>
        </Form>
        
    )
}

export default LoginAndSignUp