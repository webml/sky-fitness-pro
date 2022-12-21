import React from "react";
import * as S from "./style";
import { TopBar } from "../../components/TopBar/TopBar";
import { VideoPlayer } from "../../components/videoPlayer/videoPlayer";
import { ExerciseList } from "../../components/exercises/exercises";
import { ExerciseProgress } from "../../components/exercise-progress/exercise-progress";
import { useSelector } from "react-redux";


export const Training = () => {
    const { currentTraining } = useSelector(state => state.trainings)
    
    const path = {
        "section": "Красота и здоровье",
        "type": "Йога на каждый день",
        "day": "2 день"
    }
    return(
        <S.Main>
            <TopBar/>
            <S.Header>Йога</S.Header>
            <S.CurrentPath> {path.section} / {path.type} / {path.day}</S.CurrentPath>
            <S.PlayerContainer>
                    <VideoPlayer/> 
            </S.PlayerContainer>
            <S.ProgressDiv>
                    <ExerciseList/>
                    <ExerciseProgress/>
             </S.ProgressDiv>
        </S.Main>
    )
}

