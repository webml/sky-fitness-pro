import * as S from "./style";
import { getTrainingList } from "../../store/slices/trainingsSlice";
import { useDispatch } from "react-redux";
import { modalHandler } from '../../store/slices/modalSlice'

export function Courses(props) {
  const dispatch = useDispatch()

  const handleClick = (id) => {
    dispatch(modalHandler())
    dispatch(getTrainingList(id))
  }

  return (
    <S.Box img={props.img}>
      <S.Name>{props.name}</S.Name>
      {props.butt && <S.BottomUp onClick={()=>handleClick(props.id)}>Перейти →</S.BottomUp>}
    </S.Box>
  );
}
