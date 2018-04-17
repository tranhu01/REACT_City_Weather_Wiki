import React from "react";

const Weather = props => (
        <div className="weather__info">
            {
                props.city && props.country && <p className="weather__key">Location:
                    <span className="weather__value"> {props.city}, {props.country} </span>
                </p>
            }
            {
                props.temperature && <p className="weather__key">Temperature:
                    <span className="weather__value"> {props.temperature} °C</span>
                </p>
            }
            {
                props.max_temp && <p className="weather__key">Highest Temp:
                    <span className="weather__value"> {props.max_temp} °C</span>
                </p>
            }
            {
                props.min_temp && <p className="weather__key">Lowest Temp:
                    <span className="weather__value"> {props.min_temp} °C</span>
                </p>
            }
            {
                props.humidity && <p className="weather__key">Humidity:
                    <span className="weather__value"> {props.humidity} %</span>
                </p>
            }
            {
                props.description && <p className="weather__key">Condition:
                    <span className="weather__value"> {props.description}</span>
                </p>
            }
            {
                props.pressure && <p className="weather__key">Pressure:
                    <span className="weather__value"> {props.pressure} hpa</span>
                </p>
            }
            {
                props.windspeed && <p className="weather__key">Windspeed:
                    <span className="weather__value"> {props.windspeed} m/s</span>
                </p>
            }
            {
                props.error && <p className="weather__error">
                    <span className="weather__value"> {props.error}</span>
                </p>
            }
        </div>
);
// class Weather extends React.Component {
//     render() {
//         return (
//             <div>
//                 { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
//                 { this.props.temperature && <p>Temperature: {this.props.temperature}</p> }
//                 { this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
//                 { this.props.description && <p>Condition: {this.props.description}</p> }
//                 { this.props.error && <p>{this.props.error}</p> }
//             </div>
//         );
//     }
// }

export default Weather;