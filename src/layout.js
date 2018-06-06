import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import Weather from './Weather';
import Form from './Form';
import Nav from './Nav';
import './layout.css';
const API_KEY = "2a41aeea56aabfb9ff1218730fc32426";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props;

        this.getTrail = this.getTrail.bind(this);
        this.getDate = this.getDate.bind(this);
    }

    getTrail = async (e) => {
        e.preventDefault();

        const city = e.target.city2.value;
        this.setState({
            show: !this.state.show
        });

        const country = e.target.country.value;

        const api_call = await fetch(`https://api.wunderground.com/api/b1049a092a7f69ea/astronomy/q/${country}/${city}.json`);
        const api_call2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        const data2 = await api_call2.json();
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
                temperature: data2.main.temp,
                city: data2.name,
                clouds: data2.clouds.all,
                main: data2.weather[0].main,
                icon: data2.weather[0].icon,
                rain: data2.rain,
                pressure: data2.main.pressure,
                humidity: data2.main.humidity,
                description: data2.weather[0].description,
                sunrises: data.sun_phase.sunrise.minute,
                error: ""
            });
        } else {
            this.setState({
                moon_phase: undefined,
                sunset: undefined
            });
        }

        var clouds = data2.clouds.all;

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

    getDate() {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        this.setState({date, year, month});

    }

    componentDidMount() {
        this.getDate();
    }

    render() {
        return (

            <div>
                <Nav />
                <div className="container" id="layout_page">
                    <div class="row">
                        <div className="col-md-12 col-xs-12">
                            <h1 className="text-center"> Search </h1>
                        </div>
                        <div className="col-md-12 col-xs-12">
                            <Form getTrail={this.getTrail}/>
                        </div>
                        <div className="col-md-12 col-xs-12 city_date">
                            <h3 id="message"> {this.state.msg} </h3>

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
                            <div className="date">
                                <p id="d"> {this.state.date}/{this.state.month}/{this.state.year}</p>

                                <h4 id="sh">Astronomy </h4>


                                <div id="results">

                                    <span className="city" id="text-position">Astronmical Times</span>


                                    {this.state.moon_phase && <div> moon_phase: {this.state.moon_phase}</div>  }
                                    {this.state.sunset && this.state.sunsets &&
                                    <div className="row"><p> sunset Time: {this.state.sunset} </p> :
                                        <p> {this.state.sunsets} </p></div> }

                                    {this.state.sunrise && this.state.sunrises &&
                                    <div className="row"><p> sunrise Time: {this.state.sunrise} </p> :
                                        <p> {this.state.sunrises} </p></div> }

                                    {this.state.moon_set && this.state.moon_sets &&
                                    <div className="row"><p> moonset: {this.state.moon_set} </p> :
                                        <p> {this.state.moon_sets} AM</p></div> }

                                    <div className="w-100"></div>
                                    {this.state.moon_rise && this.state.moon_rises &&
                                    <div className="row"><p>moonrise - {this.state.moon_rise} </p> :
                                        <p> {this.state.moon_rises} PM</p></div> }


                                    {this.state.moon_state && <p> {this.state.moon_state} moon </p> } <br></br>
                                    {this.state.moon_hour && <p> hemisphere: {this.state.moon_hour} </p>  }
                                </div>

                            </div>
                        </div>
                        {/*<div className="col-md-12">
                        </div>*/}
                    </div>
                </div>
            </div>

        );
    }
}
export default Layout;


