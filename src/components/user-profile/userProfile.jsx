import React from "react";
import * as S from "./style";


export const UserProfile = () => {

    return (
        <S.Main>
            <S.UserPic src={process.env.PUBLIC_URL + "/profile.png"} alt="profile_picture"></S.UserPic>
            <S.UserName>Сергей</S.UserName>
            <S.UserInfoBtn></S.UserInfoBtn>
        </S.Main>
    )
}