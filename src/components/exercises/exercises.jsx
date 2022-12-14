import React from "react";
import { useState } from "react";
import Form from "../Modals/form";
import InputProgress from "../Modals/input-progess/InputProgress";

import * as S from "./style";

export const ExerciseList = () => {
  const [progress, setProgress] = useState(false);
  const path = [
    "Наклон вперед (10 повторений)",
    "Наклон назад (10 повторений)",
    "Поднятие ног, согнутых в коленях (5 повторений)",
  ];
  return (
    <S.Main>
      <S.Header>Упражнения</S.Header>
      <S.List>
        {path.map((item) => (
          <S.ListItem>{item}</S.ListItem>
        ))}
      </S.List>
      <S.ProgressBtn onClick={() => setProgress(true)}>
        Заполнить свой прогресс
      </S.ProgressBtn>
      {progress === true ? (
        <Form  children={<InputProgress set={setProgress} />} />
      ) : (
        ""
      )}
    </S.Main>
  );
};
