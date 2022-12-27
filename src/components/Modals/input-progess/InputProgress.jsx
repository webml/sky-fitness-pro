import FormInput from "../form-input";
import Button from "../../UI Kit/button";
import * as S from "./styles";
import { useSelector } from "react-redux";

const InputProgress = () => {
  const { exercisesList } = useSelector(state => state.trainings)
  
  return (
    <S.ModalBox>
      <S.ModalTitle>Мой прогресс</S.ModalTitle>
      <S.ModalContent>
        {exercisesList.map((el) => (
          <S.ModalElement>
            <S.ModalElementTitle>
              Сколько раз вы сделали {el.title}?
            </S.ModalElementTitle>
            <FormInput type="text" placeholder="Введите значение" />
          </S.ModalElement>
        ))}
      </S.ModalContent>
      <S.ModalButtonBox>
        <Button title="Отправить" />
      </S.ModalButtonBox>
    </S.ModalBox>
  );
};

export default InputProgress;
