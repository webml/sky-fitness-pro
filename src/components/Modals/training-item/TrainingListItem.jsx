import React from "react";


import * as S from './styles'

const TrainingListItem = ({title, day, completed}) => {

    return(
        <S.TrainingListItem $completed={completed}>
            <S.ItemTitle>{title}</S.ItemTitle>
            {completed && <S.CustomCheckbox src={process.env.PUBLIC_URL + '/img/checkbox.svg'}/>}
            <S.ItemDescription>
                <S.CourseTile>Йога на каждый день</S.CourseTile>
                <S.DaySpan>{day} день</S.DaySpan>
            </S.ItemDescription>

        </S.TrainingListItem>
    )
}

export default TrainingListItem