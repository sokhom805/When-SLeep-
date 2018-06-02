import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
const Weather = props => (<div className="wrapper">

  <div className="weather">

    <div className="city"><h1>{props.city}</h1></div>



    <div className="clearfix" ></div>

    <div className="cont">
      <div className="icon">

        <img className='img-fluid' src={`http://openweathermap.org/img/w/${props.icon}.png`} />
      </div>

    </div>

    <div className="temp"> {props.temperature && <div className="current"> {props.temperature}℃</div>}




      <p id="row"> {props.description} </p>
      <div className="high"> <p> pressure:{props.pressure}</p> </div>
      <div className="low"><p>  humidity {props.humidity} </p> </div>
      {props.clouds && <div className="low"><p>  cloud cover {props.clouds} % </p> </div>}



      <div className="left">

      </div>

    </div>

  </div>

</div>)



export default Weather; 