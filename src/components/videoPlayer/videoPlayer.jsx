import React from "react";
import * as S from "./style";


export const VideoPlayer = () => {
    return(
        <S.Container>
                    <S.iframe
                    src="https://www.youtube.com/embed/GsPq9mzFNGY"
                    allowFullScreen
                    title="TrainingVideo"
                    />
        </S.Container>
        
    )
}