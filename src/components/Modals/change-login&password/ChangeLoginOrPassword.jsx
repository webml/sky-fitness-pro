import React from "react";
import Form from '../form'
import FormInput from '../form-input'
import Button from '../../UI Kit/button'

import * as S from './styles'

const ChangeLoginOrPassword = () => {
    const flag = 'password'

    return( 
        <Form>
            <div>Здесь должен быть логотип</div>
            <S.ModalTitle>{flag === 'login' ? 'Новый логин:' : 'Новый пароль:'}</S.ModalTitle>
            {
                flag === 'login'
                ? <FormInput type='text' placeholder='Логин'/>
                : <>
                    <FormInput type='password' placeholder='Пароль'/>
                    <FormInput type='password' placeholder='Повторите пароль'/>
                </>
            }
            <S.ModalButtonBox>
                <Button title='Сохранить'/> 
            </S.ModalButtonBox>
        </Form>
    )
}

export default ChangeLoginOrPassword