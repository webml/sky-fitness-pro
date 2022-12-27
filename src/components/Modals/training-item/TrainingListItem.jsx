import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { modalHandler } from "../../../store/slices/modalSlice";
import { getTraining, setCurrentTrainingNumber } from "../../../store/slices/trainingsSlice";

import * as S from "./styles";

const TrainingListItem = ({ title, desc, completed, id, idx }) => {
  const dispatch = useDispatch()

  const handleClick = (num) => {
    dispatch(setCurrentTrainingNumber(idx + 1))
    dispatch(getTraining(num))
    dispatch(modalHandler())
  }
  
  return (
    <NavLink 
      style={{color:'#000000', textDecoration: "none" }} 
      to="/training"
      onClick={() => handleClick(id)}
    >
      <S.TrainingListItem $completed={completed}>
        <S.ItemTitle>{title}</S.ItemTitle>
        {completed && 
          <S.CustomCheckbox
            src={process.env.PUBLIC_URL + "/img/checkbox.svg"}
          />
        }
        <S.ItemDescription>
          <S.CourseTile>{desc}</S.CourseTile>
        </S.ItemDescription>
      </S.TrainingListItem>
    </NavLink>
  );
};

export default TrainingListItem;
