import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // JS
import './App.css';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.min.css'


const root = ReactDOM.createRoot(document.querySelector('#root'));

function SimpleCounter(props) {
    return (

        <div className="timer d-flex justify-content-center">
            <div className="icon"><i className="fa-regular fa-clock"></i></div>
            <div className="four">{props.dFour}</div>
            <div className="three">{props.dThree}</div>
            <div className="two">{props.dTwo}</div>
            <div className="one">{props.dOne}</div>
        </div>

    );

}
SimpleCounter.propTypes = {
    dOne: PropTypes.number,
    dTwo: PropTypes.number,
    dThree: PropTypes.number,
    dFour: PropTypes.number,
};


let counter = 0;
setInterval(function () {
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    console.log(four, three, two, one)
    root.render(
        <SimpleCounter dOne={one} dTwo={two} dThree={three} dFour={four} />,
        )
        counter++;
}, 1000)





/* const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Main {...data} />) */; // Spread operator
