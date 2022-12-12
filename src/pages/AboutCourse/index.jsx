import * as S from "./styles";

import { BlackLogo } from "../../components/logo/blackLogo";
import Header from "../../components/AboutCourse/Header";
import Reasons from "../../components/AboutCourse/Reasons";
import Directions from "../../components/AboutCourse/Directions";
import Description from "../../components/AboutCourse/Description";
import Apply from "../../components/AboutCourse/Apply";

const AboutCourse = (props) => {
  return (
    <S.Container>
      <BlackLogo />
      <Header courseName={props.course.name} courseImg={props.course.img} />
      <Reasons reasons={props.course.reasons} />
      <Directions directions={props.course.directions} />
      <Description description={props.course.description} />
      <Apply />
    </S.Container>
  );
};

export default AboutCourse;
