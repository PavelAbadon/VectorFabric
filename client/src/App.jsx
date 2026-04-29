import { Route, Routes } from "react-router";
import '../public/styles/styles.css';

import Home from "./components/Home";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </>
  );
}

export default App;
