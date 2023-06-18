import axios from "axios";
import { setUser } from "../reducers/userReducer";

export const registration = async (email, password, userName) => {
  try {
    const response = await axios.post(
      "https://sore-puce-panda-wig.cyclic.app/api/auth/registration",
      {
        email,
        password,
        userName,
      }
    );
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://sore-puce-panda-wig.cyclic.app/api/auth/login",
        {
          email,
          password,
        }
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://sore-puce-panda-wig.cyclic.app/api/auth/auth",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      console.log(e);
      localStorage.removeItem("token");
    }
  };
};
