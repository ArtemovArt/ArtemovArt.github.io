import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, registration } from "../../actions/user";
import Input from "../UI/Input";

const LoginMy = () => {
  //const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registration-page">
      <div className="registration-page__content">
        <div className="registration-page__left">
          <img
            className="registration-page__image"
            src="/images/bridge.svg"
            alt="Registration"
          />
        </div>

        <div className="registration-page__right">
          <div className="registration-page__form">
            <div className="registration-page__title">
              <span className="main-font">Приветствуем Вас!</span>
              <span className="lower-text">Войдите, чтобы продолжить</span>
            </div>
            <Input
              value={email}
              setValue={setEmail}
              type="text"
              placeholder="Введите email"
            />
            <Input
              value={password}
              setValue={setPassword}
              type="password"
              placeholder="Введите пароль"
            />
            <button
              className="reg-btn"
              onClick={(event) => {
                event.preventDefault();
                dispatch(login(email, password));
              }}
            >
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginMy;
