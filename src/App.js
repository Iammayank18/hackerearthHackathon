import "./App.css";
import { Header } from "./components/header/Header";
import Addbill from "./pages/addbill/Addbill";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home/Home";
import $ from "jquery";
function App() {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addbill" element={<Addbill />} />
      </Routes>
    </div>
  );
}

export default App;
