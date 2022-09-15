import React from 'react';
import PropTypes from 'prop-types';

const ComponentTest = ({ footer }) => {
    return (
        <>
        <footer className = "py-5 bg-black">
            <div className= "container px-5"> <p className="m-0 text-center text-white">{footer.text}</p>
            <p className="mt-2 text-center text-white">{footer.vpacks}</p></div>
        </footer>
        </>
    )
}

ComponentTest.propTypes = {
    footer: PropTypes.object.isRequired
} 

export default ComponentTest;