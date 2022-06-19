import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./components/Landing";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/Home" element={<Layout />} /> */}
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
