import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-router-dom";
import { NavLink } from "react-router-dom";
import { logout } from "../reducers/userReducer";

const Header = () => {
  const setActive = ({ isActive }) => (isActive ? "active" : "navbar-buttons");
  const isAuth = useSelector((state) => state.user.isAuth);
  const userName = useSelector((state) => state.user.currentUser.userName);
  const dispatch = useDispatch();
  return (
    <header className="navbar">
      <div className="inner-bar">
        <div className="bar-content">
          <div className="logo text-uppercase">Enjoy English</div>
          {isAuth && (
            <NavLink
              to="/main"
              className={setActive}
            >
              Главная
            </NavLink>
          )}
          {isAuth && (
            <NavLink
              to="/textbook"
              className={setActive}
            >
              Учебник
            </NavLink>
          )}
          {isAuth && (
            <NavLink
              to="/sprint"
              className={setActive}
            >
              Спринт
            </NavLink>
          )}
        </div>
        <div className="profile">
          <div
            className="d-flex flex-row align-center"
            style={{ gap: 21 }}
          >
            {!isAuth && (
              <NavLink
                to="/login"
                className={(isActive) => (isActive ? "login" : "login")}
                style={{ gap: 5 }}
              >
                Войти
                <img
                  src="/images/black-arrow.svg"
                  alt="b-arrow"
                />
              </NavLink>
            )}
            {!isAuth && (
              <NavLink
                to="/registration"
                className={(isActive) =>
                  isActive ? "signUp-btn" : "signUp-btn"
                }
              >
                Зарегистрироваться
              </NavLink>
            )}
            {isAuth && (
              <div className="profile">
                <div className="user-side">
                  <span className="user-image">
                    P{/* {userName[0].toUpperCase()} */}
                  </span>
                  <span className="font-weight: 600;">{userName}</span>
                </div>
                <div
                  className="signUp-btn"
                  onClick={() => dispatch(logout())}
                >
                  Выйти
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
