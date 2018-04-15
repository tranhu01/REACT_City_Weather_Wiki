import React from 'react';

const Wiki = props => (
    <div className="weather__info">
        {
            props.title && <p className="weather__key">City:
                <span className="weather__value"> {props.suggestions}</span>
            </p>
        }
        {
            props.title && <p className="weather__key">Description:
                <span className="weather__value"> {props.introduction}</span>
            </p>
        }
        {
            props.title && <p className="weather__key">More Information:
                <a href={props.links} className="weather__value"> {props.links}</a>
            </p>
        }
        {
            props.error && <p className="weather__error">
                <span className="weather__value"> {props.error}</span>
            </p>
        }
    </div>
);

export default Wiki;