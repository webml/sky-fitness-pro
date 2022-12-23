import * as S from "./style";
import { TopBar } from "../../components/TopBar/TopBar";
import { VideoPlayer } from "../../components/videoPlayer/videoPlayer";
import { ExerciseList } from "../../components/exercises/exercises";
import { ExerciseProgress } from "../../components/exercise-progress/exercise-progress";
import { useSelector } from "react-redux";
import Modal from '../../components/UI Kit/modal'
import InputProgress from "../../components/Modals/input-progess/InputProgress";

export const Training = () => {
    const { currentTraining } = useSelector(state => state.trainings)
    const { currentCourse } = useSelector(state => state.courses)
    const { modalActive } = useSelector(state => state.modal)

    return(
        <S.Main>
            <TopBar/>
            <S.Header>{currentCourse.name}</S.Header>
            <S.CurrentPath> {currentTraining?.name} / {currentTraining?.description}</S.CurrentPath>
            <S.PlayerContainer>
                    <VideoPlayer/> 
            </S.PlayerContainer>
            <S.ProgressDiv>
                    <ExerciseList />
                    <ExerciseProgress/>
             </S.ProgressDiv>
             {
                modalActive 
                && <Modal>
                    <InputProgress />
                </Modal>
             }
        </S.Main>
    )
}

