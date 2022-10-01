import React from "react";
import { Navigate } from "react-router-dom";
import { jwtUtils } from "../utils/jwtUtils";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  // 넘어오는 props를 파악하는게 중요.
  // path, component ....
  const token = useSelector((state) => state.Auth.token);
  // redirectUrl은 로그인이 성공후 돌아갈 화면이다.
  if (!jwtUtils.isAuth(token)) {
    alert("로그인이 필요한 페이지입니다. ");
    return <Navigate to={"/"} />;
  }

  return <>{children}</>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
