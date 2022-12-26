import { useState } from "react";
import * as S from "./style";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const UserProfile = () => {
    const { username } = useSelector(state => state.user.user)
    const [ showNav, setShowNav ] = useState(false)
    const location = useLocation()

    return (
        <S.Main>
            <S.UserPic src={process.env.PUBLIC_URL + "/profile.png"} alt="profile_picture"></S.UserPic>
            <S.UserName $location={location.pathname}>{username}</S.UserName>
            <S.UserInfoBtn 
                onClick={() => setShowNav(prev => !prev)} 
                $location={location.pathname}
            />
            {
                showNav &&
                <S.UserNav>
                    <S.UserOptions>
                        <S.NavigationLink to={'/'}><S.UserOption>Главная</S.UserOption></S.NavigationLink>
                        <S.NavigationLink to={'/profile'}><S.UserOption>Личный кабинет</S.UserOption></S.NavigationLink>
                    </S.UserOptions>
                </S.UserNav> 
            }
        </S.Main>
    )
}