import React from "react";
import { NavLink } from "react-router-dom";

import * as S from "./styles";

const TrainingListItem = ({ title, day, completed }) => {
  return (
    <NavLink style={{color:'#000000', textDecoration: "none" }} to="/training">
      <S.TrainingListItem $completed={completed}>
        <S.ItemTitle>{title}</S.ItemTitle>
        {completed && (
          <S.CustomCheckbox
            src={process.env.PUBLIC_URL + "/img/checkbox.svg"}
          />
        )}
        <S.ItemDescription>
          <S.CourseTile>Йога на каждый день</S.CourseTile>
          <S.DaySpan>{day} день</S.DaySpan>
        </S.ItemDescription>
      </S.TrainingListItem>
    </NavLink>
  );
};

export default TrainingListItem;
