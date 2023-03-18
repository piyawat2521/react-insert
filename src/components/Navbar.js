import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Announce from "../pages/Announce";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Register from "../pages/Register";

function Navbar() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col className="navbar-bk">
            <div className="navbar-icon">Piyawat.saw</div>
            <div className="navbar-menu">
              <span className="navbar-item"><NavLink to="/Home">หน้าหลัก</NavLink> </span>
              <span className="navbar-item"><NavLink to="/register">ลงทะเบียน</NavLink> </span>
              <span className="navbar-item"><NavLink to="/announce">ประกาศผล</NavLink> </span>
              <span className="navbar-item"><NavLink to="/contact">ติดต่อเรา</NavLink></span>
            </div>
          </Col>
        </Row>
      </Container>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/announce" element={<Announce/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
