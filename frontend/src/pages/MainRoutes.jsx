import React from "react";
import { Route, Routes } from "react-router-dom";
// import Login from './Login'
// import Register from './Register'
// import Homepage from './Homepage'
import Homepage from "./Homepage";
import Login from "./Login";
import Register from "./Register";
function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}

export default MainRoutes;
