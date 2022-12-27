import Button from "../UI Kit/button";
import { useSelector } from 'react-redux'

import * as S from "./style";

export const ExerciseList = () => {
  const { exercisesList } = useSelector(state => state.trainings)

  return (
    <>
      <S.Main>
        <S.Header>Упражнения</S.Header>
        <S.List >
          {exercisesList.map((item) => (
            <S.ListItem 
              key={item.EX_id} 
            >
              <span>{item.title}</span>
              <p>{`(${item.count} повторений)`}</p>
            </S.ListItem>
          ))}
        </S.List>
        <Button title='Заполнить свой прогресс'/>
      </S.Main>
    </>
  );
};
