import { Route, Routes } from "react-router";
import '../public/styles/styles.css';

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/:id/details" element={<Profile />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
