import "./App.css";
import ReactDOM from "react-dom/client";
import Home from "./Home/Home.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Popular from "./Popular/Popular.jsx";
import LoginForm from "./Login/LoginForm.jsx";
import Profile from "./profile/Profile.jsx";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
