import ListItem from "../../UI Kit/listItem";
import * as S from "./styles";

const Reasons = (props) => {
  
  return (
    <S.Container>
      <S.Header>Подойдет для вас, если:</S.Header>
      <S.List>
        {props.reasons.map((reason) => (
          <ListItem key={reason} item={reason} />
        ))}
      </S.List>
    </S.Container>
  );
};

export default Reasons;
