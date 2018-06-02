import React, { Component } from 'react';
import Header from "./Header";
import Nav from "./Nav";
import About from "./About";
import Down from "./Down";
import Contact from "./Contact";
import Map from "./map/Map";
import Footer from "./Footer";

import './App.css';
export default class Home extends React.Component {
    render(){
        return(



 <div>
  <Nav />
        <Header />
        <About />
        <Down />
        <Contact />
        <Map />
        <Footer />
  
   
          </div>
            

          );}}