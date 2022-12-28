import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import Form from "../form";
import { FormInput } from "../form-input/styles";
import Button from "../../UI Kit/button";
import { BlackLogo } from "../../logo/blackLogo";

import { useDispatch } from "react-redux";
import { setIsUser } from "../../../store/slices/userSlice";

const LoginAndSignUp = ({isUser}) => {
    const dispatch = useDispatch()

    const handleIsUser = () => {
        localStorage.removeItem('sky-fitness-pro-userId')
        dispatch(setIsUser(false))
    }


    return(
        <Form>
            <BlackLogo/>
            <FormInput type='text' placeholder='Логин' name='login'/>
            {!isUser && <FormInput type='email' placeholder='E-mail' name='email' />}
            <FormInput type='password' placeholder='Пароль' name='password'/>
            <S.FormButtonBox>
                <Button title={!isUser ? 'Зарегистрироваться' : 'Войти'}/>
                {isUser && <S.SignUpButton onClick={() => handleIsUser()}>Зарегистрироваться</S.SignUpButton>}
            </S.FormButtonBox>
        </Form>
    )
}

export default LoginAndSignUp
=======

import * as S from "./styles";

import { setUser } from "../../../store/slices/userSlice";

const LoginAndSignUp = () => {
  const [isAuth, setIsAuth] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const authUser = () => {
    const auth = getAuth();

    console.log(email);
    console.log(password);

    if (!isAuth) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          console.log(user);
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            })
          );
        })
        .catch(console.error);
    }

    if (isAuth) {
      signInWithEmailAndPassword(auth, email, password)
        .then(console.log)
        .catch(console.error);
    }
  };

  return (
    <Form>
      <BlackLogo />
      <FormInput
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <FormInput
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {!isAuth && (
        <FormInput
          type="password"
          placeholder="Повторите пароль"
          id="checkPassword"
        />
      )}
      <S.FormButtonBox>
        <Button
          title={!isAuth ? "Зарегистрироваться" : "Войти"}
          onClick={authUser}
        />{" "}
        {isAuth && (
          <S.SignUpButton onClick={() => setIsAuth(!isAuth)}>
            Зарегистрироваться
          </S.SignUpButton>
        )}
      </S.FormButtonBox>
    </Form>
  );
};

export default LoginAndSignUp;

