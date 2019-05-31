import { message } from "antd";

const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      message.error("Email e/ou Senha incorretos");
      return {
        ...state,
        authError: "Login falha"
      };
    case "LOGIN_SUCESS":
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      return state;
    default:
      return state;
  }
};

export default authReducer;
