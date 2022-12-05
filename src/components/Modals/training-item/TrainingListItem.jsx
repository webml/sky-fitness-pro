import React from "react";

import * as S from './styles'

const TrainingListItem = ({title, day}) => {
    return(
        <S.TrainingListItem>
            <S.ItemTitle>{title}</S.ItemTitle>
            <S.ItemDescription>Йога на каждый день</S.ItemDescription>
            <S.StyledSpan>{day} день</S.StyledSpan>
        </S.TrainingListItem>
    )
}

export default TrainingListItem