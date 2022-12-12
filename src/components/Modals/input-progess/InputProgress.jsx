import React from "react";

import FormInput from "../form-input";
import Button from "../../UI Kit/button";

import { trainingElements } from "../../../mock/mock";
import { useState } from "react";
import * as S from "./styles";
import Form from "../form";
import ConfirmProgress from "../confirm-progress/ConfirmProgress";

const InputProgress = ({ set }) => {
  const [send, setSend] = useState(false);
  const SendGo = () => {
    setSend(true);

    let time = setTimeout(() => {
      set(false);
    }, 2000);
    return () => clearTimeout(time);
  };
  return (
    <S.ModalBox>
      <S.ModalTitle>Мой прогресс</S.ModalTitle>
      {trainingElements.map((el) => (
        <S.ModalElement>
          <S.ModalElementTitle>
            Сколько раз вы сделали {el.title}?
          </S.ModalElementTitle>
          <FormInput type="text" placeholder="Введите значение" />
        </S.ModalElement>
      ))}
      <S.ModalButtonBox onClick={SendGo}>
        <Button title="Отправить" />
      </S.ModalButtonBox>
      {send === true ? (
        <Form active={setSend} children={<ConfirmProgress />} />
      ) : (
        ""
      )}
    </S.ModalBox>
  );
};

export default InputProgress;
