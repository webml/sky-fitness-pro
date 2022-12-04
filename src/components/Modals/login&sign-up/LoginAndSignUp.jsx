import React from "react";
import FormInput from "../form-input";
import Button from '../../UI Kit/button'

import * as S from './styles'

const LoginAndSignUp = () => {
    const auth = true

    return(
        <>
            <div>Здесь должен быть логотип</div>
            <FormInput type='text' placeholder='Логин' />
            <FormInput type='password' placeholder='Пароль' />
            {!auth && <FormInput type='password' placeholder='Повторите пароль'/>}
            <S.FormButtonBox>
                <Button title={!auth ? 'Зарегистрироваться' : 'Войти'}/>
                {auth && <S.SignUpButton>Зарегистрироваться</S.SignUpButton>}
            </S.FormButtonBox>
        </>
        
    )
}

export default LoginAndSignUp