import * as S from "./style";

export function Courses(props) {
  return (
    <S.Box img={props.img}>
      <S.Name>{props.name}</S.Name>
      {props.butt ? <S.BottomUp onClick={()=>props.modal(true)}>Перейти →</S.BottomUp> : ""}
    </S.Box>
  );
}
