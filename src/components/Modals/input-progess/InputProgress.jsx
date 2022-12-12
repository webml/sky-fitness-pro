import React from "react";

import FormInput from '../form-input'
import Button from '../../UI Kit/button'

import { trainingElements } from "../../../mock/mock";

import * as S from './styles'



const InputProgress = () => {
    return(
        <S.ModalBox>
            <S.ModalTitle>Мой прогресс</S.ModalTitle>
            {
                trainingElements.map(el => (
                    <S.ModalElement>
                        <S.ModalElementTitle>Сколько раз вы сделали {el.title}?</S.ModalElementTitle>
                        <FormInput type='text' placeholder='Введите значение'/>
                    </S.ModalElement>
                ))
            }
            <S.ModalButtonBox>
                <Button title='Отправить'/>
            </S.ModalButtonBox>
        </S.ModalBox>
    )
}

export default InputProgress