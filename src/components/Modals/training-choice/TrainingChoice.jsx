import React from "react";
import TrainingListItem from '../training-item'

import { trainings } from "../../../mock/mock"; 
import * as S from './styles'

const TrainingChoice = () => {
    return(
        <S.TrainingChoice>
            <S.TrainingChoiceTitle>Выберите тренировку</S.TrainingChoiceTitle>
            <S.TrainingList>
                {trainings.map((el, i) => (
                    <TrainingListItem key={el.id} title={el.title} day={i + 1}/>
                ))}
            </S.TrainingList>
        </S.TrainingChoice>
    )
}

export default TrainingChoice