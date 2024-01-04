import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Token } from "./components/Token";
import { Footer } from "./components/Footer";
import { About } from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Token />
      <Footer />
    </div>
  );
}

export default App;
