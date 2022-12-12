import * as S from "./styles";

const Header = (props) => {
  return (
    <S.Container background={props.courseImg}>
      <S.Title>{props.courseName}</S.Title>
    </S.Container>
  );
};

export default Header;
