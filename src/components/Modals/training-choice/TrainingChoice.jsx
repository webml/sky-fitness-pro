import TrainingListItem from "../training-item";
import { useSelector } from "react-redux";
import * as S from "./styles";

const TrainingChoice = () => {
  const { trainingList } = useSelector(state => state.trainings)

  return (
    <S.TrainingChoice>
      <S.TrainingChoiceTitle>Выберите тренировку</S.TrainingChoiceTitle>
      <S.TrainingListWrapper>
        <S.TrainingList>
          {trainingList.map((el, i) => (
            <TrainingListItem
              key={el.WO_id}
              title={el.name}
              desc={el.description}
              // completed={completedWorkouts.includes(el.WO_id)}
              id={el.WO_id}
              idx={i}
            />
          ))}
        </S.TrainingList>
      </S.TrainingListWrapper>
    </S.TrainingChoice>
  );
};

export default TrainingChoice;
