import React from "react";
import * as S from "./style";
import { useSelector } from 'react-redux'
import { colors, createGradient } from "../../constants";

export const ExerciseProgress = () => {
    const { exercisesList, currentTrainingNumber } = useSelector(state => state.trainings)

    const setProgressBackground = (num, percent) => {
        const { color1, color2 } = colors[num + 1]
        return createGradient(color1, color2, percent)
    }

    return(
        <S.Main>
            <S.Header>Мой прогресс по тренировке {currentTrainingNumber}:</S.Header>
            <S.List>
                <S.ListName>
                    {
                        exercisesList.map(el => {
                            return (
                                <S.ListNameItem key={el.EX_id}>{el.title}</S.ListNameItem>
                            )
                        })
                    }
                </S.ListName>
                <S.ListProgress>
                    {
                        exercisesList.map((el, i) => {
                            return (
                                <S.ListProgressItem 
                                    key={el.title}
                                    background={setProgressBackground(i, 60)}
                                >
                                    45%
                                </S.ListProgressItem>
                            )
                        })
                    }
                </S.ListProgress>
            </S.List>
        </S.Main>
    )
}