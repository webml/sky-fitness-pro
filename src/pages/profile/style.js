import styled from "styled-components";

export const Profile = styled.div`
  position: relative;
  padding-top: 30px;
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
  padding-bottom: 95px;
  background: #fafafa;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 220px;
    height: 35px;
  }
`;
export const Сontents = styled.div`
  padding-top: 75px;
  line-height: 56px;

  font-style: normal;
  font-weight: 400;
  font-size: 48px;

  color: #000000;
`;
export const Text = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;

  color: #000000;
`;
export const Buttom = styled.button`
  width: 275px;
  height: 52px;
  background: #580ea2;
  border-radius: 46px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  border: none;
  color: #ffffff;

  :hover {
    background: #3f007d;
  }
  :active {
    background: #271a58;
  }
`;
export const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const BoxCurses = styled.ul`
  padding-top: 60px;
  display: flex;
  gap: 40px;
  list-style-type: none;
`;
export const Ellipse = styled.div`
  width: 50px;
  height: 50px;
  background: #d9d9d9;
  border-radius: 50%;
`;
export const Name = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-align: right;
  color: #000000;
`;
export const Menu = styled.select`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-align: right;
  color: #000000;
  border: none;
  background: #fafafa;
`;
export const BoxMen = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;
`;
