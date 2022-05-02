import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./public/light-mode.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Departamento from "./pages/Departamento";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function App() {
  return (
    <>
      <Router>
        <div className="container p-4" id="cuerpo">
          <Header />
          <div class="container p-4" id="cuerpo">
            <div class="row">
              <div class="col-12 col-md-2">
                <Nav />
              </div>
              <div class="col-12 col-md-10 text-center">
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/departamento/:id" element={<Departamento />} />
                </Routes>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
