import React from "react";
import PropTypes from 'prop-types';
import Header from './Header';
import Cards from "./Cards"

const Body = () => {
    return(
        <>
        <Header header = {header} />
        <Cards cards = {cards} /> 
        </>
        )
}

Body.header.propTypes ={

    body: PropTypes.object.isRequired
}; 

export default Body;