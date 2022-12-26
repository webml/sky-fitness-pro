import { WhiteLogo } from "../../components/logo/whiteLogo";
import LoginAndSignUp from "../../components/Modals/login&sign-up";
import { Courses } from "../../components/Сourses";
import { useSelector, useDispatch } from "react-redux";
import { getAllCourses, getCourseById } from "../../store/slices/coursesSlice";
import { NavLink } from "react-router-dom";
import * as S from "./style";
import { useEffect } from "react";
import { coursesImages } from "../../constants";
import Modal from '../../components/UI Kit/modal'
import { modalHandler } from '../../store/slices/modalSlice'
import { setIsUser } from "../../store/slices/userSlice";
import { UserProfile } from '../../components/user-profile/userProfile'

function Main() {
  const dispatch = useDispatch()
  const { allCourses } = useSelector(state => state.courses)
  const { modalActive } = useSelector(state => state.modal)
  const { isUser, auth } = useSelector(state => state.user)

  const up = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if(localStorage.getItem('sky-fitness-pro-userId')) {
      dispatch(setIsUser(true))
    }
    dispatch(getAllCourses())
  }, [dispatch])

  return (
    <S.Main>
      <S.Header>
        {" "}
        <WhiteLogo />{" "}
        {
          !auth ? 
          <S.ButtonEnter onClick={() => dispatch(modalHandler())}>
            Войти
          </S.ButtonEnter>
          : <UserProfile />
        }
        
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
      {
        modalActive
        && <Modal>
          <LoginAndSignUp isUser={isUser}/>
        </Modal>
      }
    </S.Main>
  );
}

export default Main;
