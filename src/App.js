import React, { Component } from 'react';
import logo from './logo.svg';

import Weather from "./Weather.js";
import Header from "./Header";
import Nav from "./Nav";
import About from "./About";
import Down from "./Down";
import Contact from "./Contact";
import Map from "./map/Map";
import Footer from "./Footer";
import Home from "./Home";

import Skycons from "react-skycons"
import { geticon } from "./geticon.js"

import ToggleDisplay from 'react-toggle-display';
import Form from "./Form.js";
import Layout from "./layout.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const API_KEY = "2a41aeea56aabfb9ff1218730fc32426";

class App extends React.Component {

  state = {
    temperature: "",
    city: "",
    city2: "",
    country: "",
    msg: "",
    pressure: "",
    humidity: "",
    description: "",
    rain: "",
    main: "Drizzle",
    icon: "09d",
    error: "",
    date: "",
    month: "",
    lat: "",
    show: false,
    lng: "",
    year: "",
    clouds: ""

  }

  handlenum1Change(evt) {



    let temp = (evt.target.value);




  }

  getDate() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    this.setState({ date, year, month });

  }

  componentDidMount() {
    this.getDate();
  }


  




  getTrail = async (e) => {
    e.preventDefault();


    const city = e.target.city2.value;
    this.setState({
      show: !this.state.show
    });

    const country = e.target.country.value;


    const api_call = await fetch(`https://api.wunderground.com/api/b1049a092a7f69ea/astronomy/q/${country}/${city}.json`);

    const data = await api_call.json();

    if (city) {
      this.setState({
        moon_phase: data.moon_phase.ageOfMoon,
        moon_hour: data.moon_phase.hemisphere,
        moon_rise: data.moon_phase.moonrise.hour,
        moon_rises: data.moon_phase.moonrise.minute,
        moon_state: data.moon_phase.phaseofMoon,
        moon_set: data.moon_phase.moonset.hour,
        moon_sets: data.moon_phase.moonset.minute,
        sunset: data.sun_phase.sunset.hour,
        sunsets: data.sun_phase.sunset.minute,
        sunrise: data.sun_phase.sunrise.hour,
        sunrises: data.sun_phase.sunrise.minute


      });
    } else {
      this.setState({
        moon_phase: undefined,
        sunset: undefined
      });
    }
  }




  //   const BasicExample = () => (
  //   <Router>
  //     <div>
  //       <ul className="navbar-nav ml-auto">

  //         <li className="nav-item">
  //           <Link to="/about">About</Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link to="/topics">Topics</Link>
  //         </li>
  //       </ul>

  //       <hr />

  //       <Route path="/about" component={About} />
  //       <Route path="/topics" component={Topics} />
  //     </div>
  //   </Router>
  // );


  render() {


    return (
      <div>
      
        <div> 
         <Router>
        
               
        
              <Route path="/" component={Home} />  
            
         
        </Router>
        </div>

      
 </div>

    );
  }
};

export default App;