import { BlackLogo } from "../../components/logo/blackLogo";
import { Courses } from "../../components/Сourses";
import * as S from "./style";

export function Profile(params) {
  return (
    <S.Profile>
      <S.Header>
        <BlackLogo />
        <S.BoxMen><S.Ellipse/><S.Name>Сергей</S.Name><S.Menu/></S.BoxMen>
      </S.Header>
      <S.Сontents>
        <b>Мой профиль</b>
      </S.Сontents>
      <S.Text>Логин: sergey.petrov96</S.Text>
      <S.Text>Пароль: 4fkhdj880d</S.Text>
      <S.BoxButton>
        <S.Buttom>Редактировать логин</S.Buttom>
        <S.Buttom>Редактировать пароль</S.Buttom>
      </S.BoxButton>
      <S.Сontents>
        <b>Мои курсы</b>
      </S.Сontents>
      <S.BoxCurses>
        <Courses butt='yes' name ='Йога'/>
        <Courses butt='yes' name="Стретчинг" />
        <Courses butt='yes' name="Бодифлекс" />

      </S.BoxCurses>
    </S.Profile>
  );
}
