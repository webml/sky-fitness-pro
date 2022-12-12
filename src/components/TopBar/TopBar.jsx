import React from "react";
import { BlackLogo } from "../logo/blackLogo";
import { UserProfile } from "../user-profile/userProfile";
import * as S from "./style";

export const TopBar = () => {
  return (
    <S.Main>
      <S.SubDiv>
        <BlackLogo />
      </S.SubDiv>
      <S.SubDiv>
        <UserProfile />
      </S.SubDiv>
    </S.Main>
  );
};
