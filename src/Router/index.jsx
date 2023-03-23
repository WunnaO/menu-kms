import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/User/Home";
import Admin from "../page/Admin/Home";
import Category from "../page/Admin/Category";
import AdminLayout from "../layout/AdminLayout";
import Setting from "../page/Admin/Setting";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
        <Route path="category" element={<Category />} />
        <Route path="setting" element={<Setting />} />
      </Route>
    </Routes>
  );
};

export default Router;
