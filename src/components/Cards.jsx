import React from "react";
import PropTypes from 'prop-types';
import Card from "./Card"


const Cards = ({ cards }) => {
    return (
        <div className="row mt-4">
            {cards.map(
                ({ photo, title, description }, index) => {
                    return (
                        <Card photo={photo} title={title} description={description} />
                    );
                }
            )}
        </div>
    );
};
Cards.propTypes = {
    cards: PropTypes.array.isRequired
};

export default Cards;