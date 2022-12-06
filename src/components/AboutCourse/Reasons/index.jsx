import * as S from "./styles";

const Reasons = (props) => {
  return (
    <S.Container>
      <S.Header>Подойдет для вас, если:</S.Header>
      <S.List>
        {props.reasons.map((reason) => (
          <li key={reason}>
            <p>{reason}</p>
          </li>
        ))}
      </S.List>
    </S.Container>
  );
};

export default Reasons;
