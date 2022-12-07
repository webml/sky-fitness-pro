import React from "react";
import * as S from "./style";

export const ExerciseList = () => {
    return(
        <S.Main>
            <S.Header>Упражнения</S.Header>
            <S.List>
                <S.ListItem>Наклон вперед (10 повторений)</S.ListItem>
                <S.ListItem>Наклон назад (10 повторений)</S.ListItem>
                <S.ListItem>Поднятие ног, согнутых в коленях (5 повторений)</S.ListItem>
            </S.List>
            <S.ProgressBtn>Заполнить свой прогресс</S.ProgressBtn>
        </S.Main>
        
    )
}