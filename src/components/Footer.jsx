import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/banapay-logo-no-bg.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <br />
        <Row className="align-items-center mt-1">
          <Col size={12} sm={6} style={{ display: 'flex' }}>
            <img className="logo-footer" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Banapay" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://twitter.com/banapay_app" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
              <a href="#"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p className="text-dark">Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
