import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import banapay from "../assets/img/banapay.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Security", "Freedom", "Future", "Banapay" ];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    // }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col className="banner-text-col">
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Embrace a New Freedom.</span>
                <h1 className="we-are">{`We are`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Secure Future", "Free Future", "Your Future" ]'><span className="wrap">{text}</span></span></h1>
                  <p className="text-dark">Banapay transcends being merely a payment gateway; it's a platform shaping the future of commerce. Empowering you to truly own your money, it remains solely under your control through the blockchain. Accept payments with ease, anytime and anywhere. It's time for financial freedom – your freedom.</p>
                  <button onClick={() => console.log('launch-app')}><p className="launch-app">Soon</p> </button>
                  <button onClick={() => console.log('buy-token')}><p className="buy-token">Buy Token<ArrowRightCircle size={25} /></p> </button>
              </div>}
            </TrackVisibility>
          </Col>
          <div className="banner-text-div">
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Embrace a New Freedom.</span>
                <h1 className="we-are">{`We are`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Secure Future", "Free Future", "Your Future" ]'><span className="wrap">{text}</span></span></h1>
                  <p className="text-dark">Banapay transcends being merely a payment gateway; it's a platform shaping the future of commerce. Empowering you to truly own your money, it remains solely under your control through the blockchain. Accept payments with ease, anytime and anywhere. It's time for financial freedom – your freedom.</p>
                  <button onClick={() => console.log('launch-app')}><p className="launch-app">Soon</p> </button>
                  <button onClick={() => {window.location.href = "/buy-token"}}><p className="buy-token">Buy Token<ArrowRightCircle size={25} /></p> </button>
              </div>}
            </TrackVisibility>
          </div>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={banapay} className="header-img" alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
