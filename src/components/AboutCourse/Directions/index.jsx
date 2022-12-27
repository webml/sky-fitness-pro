import ListItem from "../../UI Kit/listItem";
import * as S from "./styles";

const Direction = (props) => {
  return (
    <S.Container>
      <S.Header>Направления:</S.Header>
      <S.List>
        {props.directions.map((direction) => (
          <ListItem key={direction} item={direction} />
        ))}
      </S.List>
    </S.Container>
  );
};

export default Direction;
