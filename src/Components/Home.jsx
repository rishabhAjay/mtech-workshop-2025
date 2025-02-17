// src/components/Home.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome, {user ? user.firstName : "Guest"}!</h1>
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Home;
