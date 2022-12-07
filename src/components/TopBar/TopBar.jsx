import React from "react";
import { BlackLogo } from '../logo/BlackLogo'
import * as S from "./style";

export const TopBar = () => {

    return (
        <S.Main>
            <S.SubDiv>
                <BlackLogo/>
            </S.SubDiv>
            <S.SubDiv>
                <S.UserPic src={process.env.PUBLIC_URL + "/profile.png"} alt="profile_picture"></S.UserPic>
                <S.UserName>Сергей</S.UserName>
                <S.UserInfoBtn></S.UserInfoBtn>
            </S.SubDiv>
        </S.Main>
    )
}