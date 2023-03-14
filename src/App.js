import "./App.css";
import Home from "./components/Home";
import Astronaut from "./components/Astronaut";
import Moon from "./components/Moon";
import NoMatch from "./components/NoMatch";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/astronaut" element={<Astronaut />}></Route>
        <Route path="/moon" element={<Moon />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
