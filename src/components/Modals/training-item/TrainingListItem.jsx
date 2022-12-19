import React from "react";
import { NavLink } from "react-router-dom";

import * as S from "./styles";

const TrainingListItem = ({ title, desc, completed }) => {

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
          <S.CourseTile>{desc}</S.CourseTile>
        </S.ItemDescription>
      </S.TrainingListItem>
    </NavLink>
  );
};

export default TrainingListItem;
