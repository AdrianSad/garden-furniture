import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/HomePage";
import Contact from "./pages/ContactPage";
import Gallery from "./pages/GalleryPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
      <Router>
      <Navbar/>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/gallery" exact component={Gallery}/>
      </Switch>
          <Footer/>
    </Router>
  );
}

export default App;
