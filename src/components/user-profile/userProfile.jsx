import React from "react";
import * as S from "./style";
import { useSelector } from "react-redux";

export const UserProfile = () => {
    const { firstName } = useSelector(state => state.user.user)
    return (
        <S.Main>
            <S.UserPic src={process.env.PUBLIC_URL + "/profile.png"} alt="profile_picture"></S.UserPic>
            <S.UserName>{firstName}</S.UserName>
            <S.UserInfoBtn></S.UserInfoBtn>
        </S.Main>
    )
}