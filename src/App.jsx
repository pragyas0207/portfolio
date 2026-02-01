// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './components/home';
import About from "./components/about";
import Projects from './components/projects';
// import Skills from './components/skills';
import Contact from './components/contact';


function App() {
  return (
    <Router>
      {/* <Navbar />
      <Home /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/skills" element={<Skills />} /> */}
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  )
}

export default App;
