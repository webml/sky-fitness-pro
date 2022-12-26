import { useEffect } from "react";
import { BlackLogo } from "../../components/logo/blackLogo";
import ChangeLoginOrPassword from "../../components/Modals/change-login&password/ChangeLoginOrPassword";
import { Courses } from "../../components/Сourses";
import TrainingChoice from "../../components/Modals/training-choice/TrainingChoice";
import { useSelector, useDispatch } from "react-redux";
import { getCoursesList } from '../../store/slices/coursesSlice'
import Modal from '../../components/UI Kit/modal'
import Button from '../../components/UI Kit/button'
import { coursesImages } from "../../constants";
import * as S from "./style";
import { UserProfile } from "../../components/user-profile/userProfile";

export function Profile() {
  const { username, password } = useSelector(state => state.user.user)
  const { currentCourses } = useSelector(state => state.courses)
  const { modalActive, currentModal } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCoursesList())
  },[dispatch])

  return (
    <S.Profile>
      <S.Header>
        <BlackLogo />
        <S.BoxMen>
          <UserProfile />
        </S.BoxMen>
      </S.Header>
      <S.Сontents>
        <b>Мой профиль</b>
      </S.Сontents>
      <S.Text>Логин: {username}</S.Text>
      <S.Text>Пароль: {password}</S.Text>
      <S.BoxButton>
        <Button title='Редактировать логин' />
        <Button title='Редактировать пароль' />
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
          {
            currentModal === 'Перейти →' 
            ? <TrainingChoice /> 
            : <ChangeLoginOrPassword flag={currentModal}/>
          }
        </Modal>
      }
    </S.Profile>
  );
}
