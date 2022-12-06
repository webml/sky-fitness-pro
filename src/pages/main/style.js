import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  width: 1440px;
  background: #271a58;
  padding-left: 140px;
  padding-right: 140px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bot: 29px;
  padding-top: 29px;
`;
export const ButtonEnter = styled.button`
  width: 77px;
  height: 36px;
  background: #140d40;
  border-radius: 46px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  border: none;
  :hover {
    background: #2d1f79;
  }
  :active {
    background: #3b29a2;
  }
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  opacity: 0.5;
`;
export const TextGreeting = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 91.5%;
  letter-spacing: -1.16878px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #f4f4ff;
`;
export const Сhanges = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/Union.png"});
  background-repeat: no-repeat;
  background-position: center;

  color: #ff8071;
  width: 231px;
  height: 212.27px;
  transform: rotate(15.96deg);
  display: flex;
  align-items: center;
`;
export const TextСhanges = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 90%;

  text-align: center;
  letter-spacing: -0.15px;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #ff8071;

  transform: rotate(15.96deg);
`;
export const Box = styled.div`
  display: flex;
`;
export const СoursesGallery = styled.div`
  display: flex;
  gap: 37px;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-bottom: 41px;
`;
export const BottomUp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 24px 9px;
  gap: 8px;

  width: 147px;
  height: 48px;
  background: #c7e957;
  border-radius: 46px;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #000000;
  :hover {
    background: #daf289;
  }
  :active {
    background: #ebffab;
  }
`;
export const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
`;
