import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
      <Router>
      <Navbar/>
      <Sidebar/>
      <Switch>
          <Route path="/" exact component={Home}/>
      </Switch>
          <Footer/>
    </Router>
  );
}

export default App;
