import { BlackLogo } from "../../components/logo/blackLogo";
// import ChangeLoginOrPassword from "../../components/Modals/change-login&password/ChangeLoginOrPassword";
// import Form from "../../components/Modals/form";
import { Courses } from "../../components/Сourses";
import TrainingChoice from "../../components/Modals/training-choice/TrainingChoice";
import { useSelector, useDispatch } from "react-redux";
import { getCoursesList } from '../../store/slices/coursesSlice'
import Modal from '../../components/UI Kit/modal'

import * as S from "./style";
import { useEffect } from "react";
import { coursesImages } from "../../constants";

export function Profile(params) {
  const { username, password, firstName } = useSelector(state => state.user)
  const { currentCourses } = useSelector(state => state.courses)
  const { modalActive } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCoursesList())
  },[dispatch])

  return (
    <S.Profile>
      <S.Header>
        <BlackLogo />
        <S.BoxMen>
          <S.Ellipse />
          <S.Name>{firstName}</S.Name>
          <S.Menu />
        </S.BoxMen>
      </S.Header>
      <S.Сontents>
        <b>Мой профиль</b>
      </S.Сontents>
      <S.Text>Логин: {username}</S.Text>
      <S.Text>Пароль: {password}</S.Text>
      <S.BoxButton>
        <S.Buttom>
          Редактировать логин
        </S.Buttom>
        <S.Buttom>
          Редактировать пароль
        </S.Buttom>
      </S.BoxButton>
      <S.Сontents>
        <b>Мои курсы</b>
      </S.Сontents>
      <S.BoxCurses>
        {
          currentCourses.map(course => (
            <li key={course.CO_id}>
              <Courses 
                name={course.name}
                img={coursesImages[course.name]}
                butt="yes"
                id={course.CO_id}
              />
            </li>
          ))
        }
      </S.BoxCurses>
      {modalActive && 
        <Modal>
          <TrainingChoice />
        </Modal>
      }
    </S.Profile>
  );
}
