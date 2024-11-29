import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import "./App.css";
import Login from "./components/Login";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Admin from "./components/Admin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  const location = useLocation();
  const shouldHideHeaderFooter = location.pathname === "/";

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      {!shouldHideHeaderFooter && <Sidebar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Admin-panel" element={<Admin />} />
        <Route path="/Add-user" element={<AddUser />} />
        <Route path="/Edit-user/:id" element={<EditUser />} />
      </Routes>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
