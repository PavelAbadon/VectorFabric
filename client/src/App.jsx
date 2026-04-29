import { Route, Routes } from "react-router";
import '../public/styles/styles.css';

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
