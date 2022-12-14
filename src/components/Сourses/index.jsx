import * as S from "./style";
import { getTrainingList } from "../../store/slices/trainingsSlice";
import { useDispatch } from "react-redux";
import { modalHandler, setCurrentModal } from '../../store/slices/modalSlice'
import { getCourseById} from "../../store/slices/coursesSlice";

export function Courses(props) {
  const dispatch = useDispatch()

  const handleClick = (id) => {
    dispatch(getCourseById(id))
    dispatch(modalHandler())
    dispatch(getTrainingList(id))
  }

  return (
    <S.Box img={props.img}>
      <S.Name>{props.name}</S.Name>
      {props.butt && 
        <S.BottomUp 
          onClick={(evt)=>{
            dispatch(setCurrentModal(evt.target.textContent))
            handleClick(props.id)
          }}
        >
            Перейти →
        </S.BottomUp>
      }
    </S.Box>
  );
}
