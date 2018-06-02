import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Layout from "./layout.js";

import Home from "./Home.js";
export default class Nav extends React.Component {
  render(){return(



<div>
    <Router>
        <div>
               
           
            <Route exact path="/layout" render={() => <Layout getWeather={this.getWeather} parentState={this.state} />} />
           
            
   
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
           <Link to="/layout">   <a className="nav-link js-scroll-trigger" href="#about">About</a></Link>
            </li>
            <li className="nav-item">
             <Link to="/"> <a className="nav-link js-scroll-trigger" href="#download"> Home</a></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">Search</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

</div>
        </Router>

        </div>
  );}}
