import * as S from "./styles";

const Direction = (props) => {
  return (
    <S.Container>
      <S.Header>Направления:</S.Header>
      <S.List>
        {props.directions.map((direction) => (
          <li key={direction}>
            <p>{direction}</p>
          </li>
        ))}
      </S.List>
    </S.Container>
  );
};

export default Direction;
