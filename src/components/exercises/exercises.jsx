import React from "react";
import * as S from "./style";

export const ExerciseList = () => {

    const path = ["Наклон вперед (10 повторений)","Наклон назад (10 повторений)","Поднятие ног, согнутых в коленях (5 повторений)"]
    return(
        
        <S.Main>
            <S.Header>Упражнения</S.Header>
            <S.List>
                {path.map(item => (
                    <S.ListItem>{item}</S.ListItem>
                ))}
            </S.List>
            <S.ProgressBtn>Заполнить свой прогресс</S.ProgressBtn>
        </S.Main>
        
    )
}