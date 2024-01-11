import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Token } from "./components/Token";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { BuyToken } from "./components/BuyToken";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <NavBar />
            <Banner />
            <About />
            <Token />
            <Footer />
          </div>
        } />
        <Route path="/buy-token" element={<BuyToken />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
