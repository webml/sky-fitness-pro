import { WhiteLogo } from "../../components/logo/whiteLogo";
import { Courses } from "../../components/Сourses";
import * as S from "./style";

function Main() {
  const up = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
        <Courses name="Йога" img="/courses/purple.png" />
        <Courses name="Стретчинг" img="/courses/blue.png" />
        <Courses name="Танцевальный фитнес" img="/courses/orange.png" />
        <Courses name="Степ-аэробика" img="/courses/green.png" />
        <Courses name="Бодифлекс" img="/courses/leightBlue.png" />
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
