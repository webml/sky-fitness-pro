import React from "react";
import * as S from "./style";

export const ExerciseProgress = () => {
    return(
        <S.Main>
            <S.Header>Мой прогресс по тренировке 2:</S.Header>
            <S.List>
                <S.ListName>
                    <S.ListNameItem>Наклон вперед</S.ListNameItem>
                    <S.ListNameItem>Наклон назад</S.ListNameItem>
                    <S.ListNameItem>Поднятие ног, согнутых в коленях</S.ListNameItem>
                </S.ListName>
                <S.ListProgress>
                    <S.ListProgressItem background='linear-gradient(to right,#565EEF 0%,#565EEF 45%,#EDECFF 45%,#EDECFF 100%)' >45%</S.ListProgressItem>
                    <S.ListProgressItem background='linear-gradient(to right,#FF6D00 0%,#FF6D00 45%,#FFF2E0 45%,#FFF2E0 100%)' >45%</S.ListProgressItem>
                    <S.ListProgressItem background='linear-gradient(to right,#9A48F1 0%,#9A48F1 45%,#F9EBFF 45%,#F9EBFF 100%)' >45%</S.ListProgressItem>
                </S.ListProgress>
            </S.List>
        </S.Main>
        
    )
}