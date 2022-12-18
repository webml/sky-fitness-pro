import React, { useRef } from "react";
import TrainingListItem from "../training-item";
import { useScrollbar } from "../../../hooks/useScrollbar";

import { trainings } from "../../../mock/mock";
import * as S from "./styles";

const TrainingChoice = () => {
  const trainingList = useRef(null);

  useScrollbar(trainingList);

  return (
    <S.TrainingChoice>
      <S.TrainingChoiceTitle>Выберите тренировку</S.TrainingChoiceTitle>
      <S.TrainingListWrapper ref={trainingList}>
        <S.TrainingList>
          {trainings.map((el, i) => (
            <TrainingListItem
              key={el.id}
              title={el.title}
              day={i + 1}
              completed={el.completed}
            />
          ))}
        </S.TrainingList>
      </S.TrainingListWrapper>
    </S.TrainingChoice>
  );
};

export default TrainingChoice;
