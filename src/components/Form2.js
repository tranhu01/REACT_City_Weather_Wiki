import React from "react";

const Form2 = props => (
    <form onSubmit={props.getInfo}>
        <input type="text" name="city" placeholder="Enter City"/>
        <input type="text" name="country" placeholder="Enter Country"/>
        <button>Get Information</button>
    </form>
);


// class Form extends React.Component {
//     render() {
//         return (
//             <form onSubmit={this.props.getWeather}>
//                 <input type="text" name="city" placeholder="City..."/>
//                 <input type="text" name="country" placeholder="Country..."/>
//                 <button>Get Weather</button>
//             </form>
//         );
//     }
// }

export default Form2;