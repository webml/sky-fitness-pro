import * as S from "./styles";

import { BlackLogo } from "../../components/logo/blackLogo";
import Header from "../../components/AboutCourse/Header";
import Reasons from "../../components/AboutCourse/Reasons";
import Directions from "../../components/AboutCourse/Directions";
import Description from "../../components/AboutCourse/Description";
import Apply from "../../components/AboutCourse/Apply";
import { useSelector } from "react-redux";
import { coursesImages } from "../../constants";

const AboutCourse = () => {
  const { currentCourse, status } = useSelector(state => state.courses)

  return (
    <S.Container>
      <BlackLogo />
      {
        status !== 'loading' && 
        <>
          <Header 
            courseName={currentCourse?.name} 
            courseImg={coursesImages[currentCourse?.name]} 
          />
          <Reasons reasons={currentCourse?.reasons} />
          <Directions directions={currentCourse?.directions} />
          <Description description={currentCourse?.description} />
          <Apply id={currentCourse?.CO_id}/>
        </>
      }
    </S.Container>
  );
};

export default AboutCourse;
