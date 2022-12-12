import React from "react";
import * as S from "./style";

export const VideoPlayer = () => {
    return(
        <S.Container>
            <S.Player src={process.env.PUBLIC_URL + "/Default-video.png"} alt='default_video'></S.Player>
            <S.Skeleton src={process.env.PUBLIC_URL + "/Play-skeleton.png"} alt='play_button-skeleton'></S.Skeleton>
        </S.Container>
        
    )
}