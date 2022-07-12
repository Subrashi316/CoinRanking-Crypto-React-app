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
      <footer className="footer container">
      <p>This project was made by Subrashi316</p> 
      <a href="https://github.com/Subrashi316" className="link-item" target="_blank" rel="noreferrer"><AiFillGithub /> Github</a>
    </footer>
    </Fragment>
  );
}

export default App;
