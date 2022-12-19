import React, { useRef } from "react";
import TrainingListItem from "../training-item";
import { useScrollbar } from "../../../hooks/useScrollbar";
import { useSelector } from "react-redux";
import * as S from "./styles";

const TrainingChoice = () => {
  const trainingListRef = useRef(null);
  useScrollbar(trainingListRef);
  const { trainingList } = useSelector(state => state.trainings)
  const { completedWorkouts } = useSelector(state => state.user)

  return (
    <S.TrainingChoice>
      <S.TrainingChoiceTitle>Выберите тренировку</S.TrainingChoiceTitle>
      <S.TrainingListWrapper ref={trainingListRef}>
        <S.TrainingList>
          {trainingList.map((el, i) => (
            <TrainingListItem
              key={el.WO_id}
              title={el.name}
              desc={el.description}
              completed={completedWorkouts.includes(el.WO_id)}
            />
          ))}
        </S.TrainingList>
      </S.TrainingListWrapper>
    </S.TrainingChoice>
  );
};

export default TrainingChoice;
