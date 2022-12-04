import * as S from "./style";

export function Courses(props) {
  return (
    <S.Box name={props.name}>
      <S.Name>{props.name}</S.Name>
      {props.butt ? <S.BottomUp>Перейти →</S.BottomUp> : ""}
    </S.Box>
  );
}
