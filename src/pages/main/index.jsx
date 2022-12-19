import { useState } from "react";
import { WhiteLogo } from "../../components/logo/whiteLogo";
import Form from "../../components/Modals/form/Form";
import LoginAndSignUp from "../../components/Modals/login&sign-up";
import { Courses } from "../../components/Сourses";
import { useSelector, useDispatch } from "react-redux";
import { getAllCourses, getCourseById } from "../../store/slices/coursesSlice";

import { NavLink } from "react-router-dom";

import * as S from "./style";
import { useEffect } from "react";
import { coursesImages } from "../../constants";

function Main() {
  const dispatch = useDispatch()
  const { allCourses } = useSelector(state => state.courses)

  const up = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(getAllCourses())
  }, [dispatch])

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
        {
          allCourses.map(course => {
            return (
              <NavLink 
                to={'/AboutCourse'}
                key={course.CO_id}
                onClick={() => dispatch(getCourseById(course.CO_id))}
              >
                <Courses 
                  name={course.name}
                  img={coursesImages[course.name]}
                  id={course.CO_id} 
                />
              </NavLink>
            )
          })
        }
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
