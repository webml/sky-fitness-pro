import * as S from "./styles";
import Button from "../../UI Kit/button/Button";

const Apply = (props) => {
  return (
    <S.Container>
      <S.Lead>
        Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
         выбором направления и тренера, с которым тренировки принесут здоровье
        и радость!
      </S.Lead>
      <Button title="Записаться на тренировку" id={props.id}/>
    </S.Container>
  );
};

export default Apply;
