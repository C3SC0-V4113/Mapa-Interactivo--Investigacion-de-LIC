import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./public/light-mode.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navegador from "./components/Nav";
import Main from "./pages/Main";
import Departamento from "./pages/Departamento";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        <Container id="cuerpo">
          <Row className="p-4" >
            <Header />
          </Row>
          <Row>
            <Col xs={12} md={2}>
              <Navegador />
            </Col>
            <Col xs={12} md={10}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/departamento/:id" element={<Departamento />} />
              </Routes>
            </Col>
          </Row>
          <Row className="p-4" >
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
