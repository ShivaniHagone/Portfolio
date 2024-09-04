import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';




function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<About/>}></Route>
        <Route exact path="/skills" element={<Skills/>}></Route>
        <Route exact path="/projects" element={<Projects/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
   </div>
    
  );
}

export default App;
