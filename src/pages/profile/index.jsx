import { useState } from "react";
import { BlackLogo } from "../../components/logo/blackLogo";
import ChangeLoginOrPassword from "../../components/Modals/change-login&password/ChangeLoginOrPassword";
import Form from "../../components/Modals/form";
import { Courses } from "../../components/Сourses";
import TrainingChoice from "../../components/Modals/training-choice/TrainingChoice";
import { useSelector, useDispatch } from "react-redux";
import { getTrainingList } from "../../store/slices/trainingsSlice"

import * as S from "./style";

export function Profile(params) {
  const { username, password, firstName } = useSelector(state => state.user)
  const [modalLogo, setModalLogo] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);
  const [modalCorses, setModalCorses] = useState(false);

  const dispatch = useDispatch()

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
        <S.Buttom onClick={() => dispatch(getTrainingList('ab1c3f'))}>
          Редактировать логин
        </S.Buttom>
        <S.Buttom onClick={() => setModalPassword(true)}>
          Редактировать пароль
        </S.Buttom>
      </S.BoxButton>
      <S.Сontents>
        <b>Мои курсы</b>
      </S.Сontents>
      <S.BoxCurses>
        <Courses
          modal={setModalCorses}
          butt="yes"
          name="Йога"
          img="/courses/purple.png"
          id='ab1c3f'
        />
        <Courses 
          modal={setModalCorses} 
          butt="yes" 
          name="Стретчинг" 
          img="/courses/blue.png"
          id='qw4req21'
        />
        <Courses 
          modal={setModalCorses} 
          butt="yes" 
          name="Бодифлекс" 
          img="/courses/leightBlue.png"
          id='fgfr54u2' 
        />
      </S.BoxCurses>
      {modalLogo &&
        <Form
          active={setModalLogo}
          children={<ChangeLoginOrPassword save={setModalLogo} flag="login" />}
        />
      }
      {modalPassword &&
        <Form
          active={setModalPassword}
          children={
            <ChangeLoginOrPassword save={setModalLogo} flag="password" />}
        />}
      {modalCorses && <Form children={<TrainingChoice/>}/>}
    </S.Profile>
  );
}
