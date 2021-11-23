import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Top from "./components/Top";
import Footer from "./components/Footer";
import './App.css';
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";

function App() {
  //const [data, setData] = useState(null); //initial state set to null
  //useState returns array [currState, setNewStateFunc]

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Page1/>} />
          <Route path='/install' element={<Page2/>} />
          <Route path='/styles' element={<Page3/>} />
          <Route path='/demo' element={<Page4/>} />
          <Route path='/conclusion' element={<Page5/>} />
          <Route path='/credits' element={<Page6/>} />
        </Routes>
        <Top />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
