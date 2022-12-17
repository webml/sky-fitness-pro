import { WhiteLogo } from "../../components/logo/whiteLogo";
import { Courses } from "../../components/Сourses";
import { useSelector, useDispatch } from "react-redux";
import { getAllCourses } from "../../store/coursesSlice";
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

  return (
    <S.Main>
      <S.Header>
        {" "}
        <WhiteLogo /> <S.ButtonEnter>Войти</S.ButtonEnter>
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
                <Courses 
                  key={course.CO_id}
                  name={course.name}
                  img={coursesImages[course.name]}
                  id={course.CO_id} 
              />
            )
          })
        }
      </S.СoursesGallery>

      <S.BottomBox>
        <S.BottomUp onClick={up}>
          <b>Наверх ↑</b>
        </S.BottomUp>
      </S.BottomBox>
    </S.Main>
  );
}

export default Main;
