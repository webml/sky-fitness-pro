import { useState } from "react";
import { BlackLogo } from "../../components/logo/blackLogo";
import ChangeLoginOrPassword from "../../components/Modals/change-login&password/ChangeLoginOrPassword";
import Form from "../../components/Modals/form";
import { Courses } from "../../components/Сourses";
import TrainingChoice from "../../components/Modals/training-choice/TrainingChoice";

import * as S from "./style";

export function Profile(params) {
  const [modalLogo, setModalLogo] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);
  const [modalCorses, setModalCorses] = useState(false);

  return (
    <S.Profile>
      <S.Header>
        <BlackLogo />
        <S.BoxMen>
          <S.Ellipse />
          <S.Name>Сергей</S.Name>
          <S.Menu />
        </S.BoxMen>
      </S.Header>
      <S.Сontents>
        <b>Мой профиль</b>
      </S.Сontents>
      <S.Text>Логин: sergey.petrov96</S.Text>
      <S.Text>Пароль: 4fkhdj880d</S.Text>
      <S.BoxButton>
        <S.Buttom onClick={() => setModalLogo(true)}>
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
        />
        <Courses modal={setModalCorses} butt="yes" name="Стретчинг" img="/courses/blue.png" />
        <Courses modal={setModalCorses} butt="yes" name="Бодифлекс" img="/courses/leightBlue.png" />
      </S.BoxCurses>
      {modalLogo === true ? (
        <Form
          active={setModalLogo}
          children={<ChangeLoginOrPassword save={setModalLogo} flag="login" />}
        />
      ) : (
        ""
      )}
      {modalPassword === true ? (
        <Form
          active={setModalPassword}
          children={
            <ChangeLoginOrPassword save={setModalLogo} flag="password" />
          }
        />
      ) : (
        ""
      )}
      {modalCorses === true ? (
        <Form
          children={
            <TrainingChoice/>
          }
        />
      ) : (
        ""
      )}
    </S.Profile>
  );
}
