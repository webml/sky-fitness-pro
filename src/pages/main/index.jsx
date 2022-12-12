import { useState } from "react";
import { WhiteLogo } from "../../components/logo/whiteLogo";
import Form from "../../components/Modals/form/Form";
import LoginAndSignUp from "../../components/Modals/login&sign-up";
import { Courses } from "../../components/Сourses";
import { NavLink } from "react-router-dom";

import * as S from "./style";

function Main() {
  const up = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [modalActive, setModalActive] = useState(false);
  return (
    <S.Main>
      <S.Header>
        {" "}
        <WhiteLogo />{" "}
        <S.ButtonEnter onClick={() => setModalActive(true)}>
          Войти
        </S.ButtonEnter>
      </S.Header>
      <S.Box>
        <div>
          <S.Text>Онлайн-тренировки для занятий дома</S.Text>
          <S.TextGreeting>
            Начните заниматься спортом и улучшите качество жизни
          </S.TextGreeting>
        </div>
        <div>
          <S.Сhanges>
            {" "}
            <S.TextСhanges>Измени своё тело за полгода</S.TextСhanges>
          </S.Сhanges>
        </div>
      </S.Box>
      <S.СoursesGallery>
        <NavLink style={{ textDecoration: "none" }} to="/AboutCourse">
          <Courses name="Йога" img="/courses/purple.png" />
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/AboutCourse">
          <Courses name="Стретчинг" img="/courses/blue.png" />
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/AboutCourse">
          <Courses name="Танцевальный фитнес" img="/courses/orange.png" />
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/AboutCourse">
          <Courses name="Степ-аэробика" img="/courses/green.png" />
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/AboutCourse">
          <Courses name="Бодифлекс" img="/courses/leightBlue.png" />
        </NavLink>
      </S.СoursesGallery>

      <S.BottomBox>
        <S.BottomUp onClick={up}>
          <b>Наверх ↑</b>
        </S.BottomUp>
      </S.BottomBox>
      {modalActive === true ? (
        <Form children={<LoginAndSignUp />} />
      ) : (
        ""
      )}
    </S.Main>
  );
}

export default Main;
