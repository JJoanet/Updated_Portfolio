import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contactpage from "./Pages/Contactpage/Contactpage"; 
import Homepage from "./Pages/Homepage/Homepage"; 
import Projectpage from "./Pages/Projectpage/Projectpage"; 
import Resumepage from "./Pages/Resumepage/Resumepage"; 
import Footer from "./Components/Footer/footer"; 
import Navbar from "./Components/Navbar/navbar"; 

function App() {
  document.title = "Jeremy Joanet"
  return (
    <Router>
      <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Contact" component={Contactpage} />
        <Route exact path="/Projects" component={Projectpage} />
        <Route exact path="/Resume" component={Resumepage} />
      <Footer />
    </Router>
  );
}

export default App;
