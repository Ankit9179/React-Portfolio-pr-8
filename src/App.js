import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Conntact from './components/Contact';
import Playlist from './components/Playlist';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/contact" element={<Conntact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
