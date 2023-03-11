import "./App.css";
import Home from "./components/Home";
import Moon from "./components/Moon";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  console.log(navigate);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/moon" element={<Moon />}></Route>
    </Routes>
  );
}

export default App;
