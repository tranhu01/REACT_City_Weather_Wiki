import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import Weather from "./components/Weather";
import Wiki from "./components/Wiki";

const API_KEY_WEATHER = "1d832581b3635bcdb62b02333b49605a"; //please use your own api key, go on openweathermap.org

class App extends React.Component {
    state = {
        temperature: undefined,
        max_temp: undefined,
        min_temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        pressure: undefined,
        windspeed: undefined,

        query: '',
        wikiData: undefined,
        requestFailed: false,
        suggestions: [],
        title: null,
        introduction: [],
        links: [],

        error1: undefined,
        error2: undefined

    }

    getWeather = async (event) => {
        event.preventDefault();

        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;

        const api_call_weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY_WEATHER}&units=metric`);
        const data = await api_call_weather.json();


        if (city && country) {
            console.log("Before fetch Weather")
            console.log(data)
            console.log("After fetch Weather")

            this.setState({
                temperature: data.main.temp,
                max_temp: data.main.temp_max,
                min_temp: data.main.temp_min,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                pressure: data.main.pressure,
                windspeed: data.wind.speed,
                error1: "",
            })

        } else {
            this.setState({
                temperature: undefined,
                max_temp: undefined,
                min_temp: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                pressure: undefined,
                windspeed: undefined,
                error1: "Please enter the location."
            })
        }
    }

    getInfo = async (event) => {
        event.preventDefault();
        console.log("Before Fetch Wiki")

        const city = event.target.elements.city.value;

        const api_call_wiki = await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${city}&origin=*`);
        const data2 = await api_call_wiki.json();

        if (city) {
            console.log(data2)
            console.log("After Fetch Wiki")
            //got the data

            this.setState({
                suggestions: data2[1][0],
                title: data2[0],
                introduction: data2[2][0],
                links: data2[3][0],
                error2: "",
            })

        } else {
            this.setState({
                query: '',
                wikiData: undefined,
                requestFailed: false,
                suggestions: [],
                title: null,
                introduction: [],
                links: [],
                error2: "Please enter the location."
            })
        }
    }


    render() {
        return (
            <div>
                <div className = "wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className='col-xs-5 title-container'>
                                    <Titles />
                                </div>
                                <div className='col-xs-7 form-container'>
                                    <Form
                                        getWeather={this.getWeather}
                                    />
                                    <Weather
                                        temperature = {this.state.temperature}
                                        max_temp = {this.state.max_temp}
                                        min_temp = {this.state.min_temp}
                                        city = {this.state.city}
                                        country = {this.state.country}
                                        humidity = {this.state.humidity}
                                        description = {this.state.description}
                                        pressure = {this.state.pressure}
                                        windspeed = {this.state.windspeed}
                                        error = {this.state.error1}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className='col-xs-5 title-container'>
                                    <Titles />
                                </div>
                                <div className='col-xs-7 form-container'>
                                    <Form2
                                        getInfo={this.getInfo}
                                    />
                                    <Wiki
                                        title = {this.state.title}
                                        suggestions = {this.state.suggestions}
                                        introduction = {this.state.introduction}
                                        links = {this.state.links}
                                        error = {this.state.error2}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;