import "./App.css";
import Home from "./components/Home";
import Moon from "./components/Moon";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/moon" element={<Moon />}></Route>
    </Routes>
  );
}

export default App;
