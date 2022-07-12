import "./App.css";
import Home from "./pages/Home";
import CryptoDetail from "./pages/CryptoDetail";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { AiFillGithub } from "react-icons/ai";

function App() {
  return (
    <Fragment>
      <main className="App container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto/:id" element={<CryptoDetail />} />
        </Routes>
      </main>
      
    </Fragment>
  );
}

export default App;
