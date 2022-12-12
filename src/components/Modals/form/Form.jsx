import React from "react";

import * as S from "./styles";

const Form = ( { active,children }) => {
  return (
    <S.Fon onClick={()=>active(false)} >
      <S.Form >{children}</S.Form>
    </S.Fon>
  );
};

export default Form;
