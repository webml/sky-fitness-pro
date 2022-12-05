import React from "react";

import checkSvg from '../../../img/checkbox.svg'

import * as S from './styles'

const TrainingListItem = ({title, day, completed}) => {
    return(
        <S.TrainingListItem $completed={completed}>
            <S.ItemTitle>{title}</S.ItemTitle>
            {completed && <S.CustomCheckbox src={checkSvg}/>}
            <S.ItemDescription>
                <S.CourseTile>Йога на каждый день</S.CourseTile>
                <S.DaySpan>{day} день</S.DaySpan>
            </S.ItemDescription>

        </S.TrainingListItem>
    )
}

export default TrainingListItem