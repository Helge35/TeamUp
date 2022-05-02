import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import HomePage from "./pages/Home/HomePage";
import Member from "./pages/Member/Member";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/member/:memberId" element={<Member />} />
    </Routes>
  );
};

export default RouterConfig;
