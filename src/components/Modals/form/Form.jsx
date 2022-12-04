import React from "react";
import FormInput from "../form-input";

import * as S from './styles'

const Form = () => {
    const auth = false

    return(
        <S.Form>
            <div>Здесь должен быть логотип</div>
            <FormInput type='text' placeholder='Логин' />
            <FormInput type='password' placeholder='Пароль' />
            {auth && <FormInput type='password' placeholder='Повторите пароль'/>}
        </S.Form>
    )
}

export default Form