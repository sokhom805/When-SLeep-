import React from 'react'; 
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import Weather from './Weather';
import Form from './Form';
import './layout.css';
const API_KEY = "2a41aeea56aabfb9ff1218730fc32426";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.getWeather = this.getWeather.bind(this);
    this.getTrail=this.getTrail.bind(this);
       this.getDate=this.getDate.bind(this);
  }

getWeather = async (e) => {
    e.preventDefault();

    this.setState({ showResults: true });
    const city = e.target.city.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    https://www.hikingproject.com/data/get-trails-by-id?ids=7000108,7002175,7005207,7001726,7005428&key=YOU
    const data = await api_call.json();

    if (city) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        clouds: data.clouds.all,
        main: data.weather[0].main,
        icon: data.weather[0].icon,
        rain: data.rain,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });

    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        pressure: undefined,
        rain: undefined,
        error: "Please enter the values."
      });
    }

    var clouds = data.clouds.all;

    if (clouds > 30) {
      this.setState({
        msg: " Poor  conditions for stargazing!! "
      })
    }
    else {

      this.setState({
        msg: " Good conditions for stargazing! no rain in forecast! "
      })
    }

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


  getDate() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    this.setState({ date, year, month });

  }

  componentDidMount() {
    this.getDate();
  }

  render() {
     return(

      <div>
    <br></br><br></br><br></br> <br></br><br></br><br></br>


    <p> Search bellow </p>
      <div className="container">

    <div className="row">

<br></br><br></br>
      <div id="city">
          
              <div className="form-group mb-2">

                <div className="form-group mx-sm-3 mb-2">


                  <form className="form-inline" onSubmit={this.getWeather} >

                  <input type="text" name="city"  className="form-control" onChange={this.handlenum1Change} placeholder="Input City..."/>
  
    
    <button className="btn btn-primary">Get Weather</button>

    
    </form> 
   
   
                  <Weather className="fish"
                    city={this.state.city}
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                 clouds={this.state.clouds}
                       pressure={this.state.pressure}
                    description={this.state.description}
                    rain={this.state.rain}
                    icon={this.state.icon}
                    error={this.state.error}
                  />
          
 <h3> {this.state.msg} </h3>

          <div className="clearfix"> 

      <div className="date"><p id="d"> {this.state.date}/{this.state.month}/{this.state.year}</p> 


<div>
    <Form getTrail={this.getTrail} />




       
              {this.state.moon_phase &&   <div> moon_phase: {this.state.moon_phase}</div>  }
               {this.state.sunset && this.state.sunsets && <div className="row"> <p> sunset Time: {this.state.sunset} </p> : <p> {this.state.sunsets} </p> </div> }

               {this.state.sunrise && this.state.sunrises &&  <div className="row"> <p> sunrise  Time: {this.state.sunrise} </p> : <p> {this.state.sunrises} </p></div> }

                   {this.state.moon_set && this.state.moon_sets && <div className="row"> <p> moonset:  {this.state.moon_set} </p> : <p> {this.state.moon_sets} AM</p> </div> }
                           
                <div className="w-100"> </div>
                  {this.state.moon_rise && this.state.moon_rises &&    <div className="row">     <p>moonrise - {this.state.moon_rise} </p> : <p> {this.state.moon_rises} PM</p> </div> }
              


               {this.state.moon_state &&   <p> {this.state.moon_state} moon  </p> }
               {this.state.moon_hour && <p> hemisphere: {this.state.moon_hour} </p>  }
 </div>
 </div>
 </div>

</div>
</div>
 </div>

 </div>
 </div> 
 </div>

 );
  }
}
 export default Layout;