import React from "react";
import Form from "../form";
import FormInput from "../form-input";
import Button from "../../UI Kit/button";

import * as S from "./styles";
import { BlackLogo } from "../../logo/blackLogo";

const ChangeLoginOrPassword = ({ flag }) => {
  
  return (
    <Form>
      <BlackLogo />
      <S.ModalTitle>
        {flag === "Редактировать логин" ? "Новый логин:" : "Новый пароль:"}
      </S.ModalTitle>
        {
          flag === "Редактировать логин" ? 
            <FormInput type="text" placeholder="Логин" name='login'/>
            : 
            <>
              <FormInput type="password" placeholder="Пароль" name='password'/>
              <FormInput type="password" placeholder="Повторите пароль" name='repeat-pasword'/>
            </>
        }
      <S.ModalButtonBox>
        <Button  title="Сохранить" />
      </S.ModalButtonBox>
    </Form>
  );
};

export default ChangeLoginOrPassword;
