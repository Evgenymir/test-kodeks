import React from 'react';
import PropTypes from 'prop-types';
import './List-words.scss';

const ListWords = ({ items, white }) => {
    const renderDouble = (number) => (
        <span className="list-words__item-quantity">
            X
            {number}
        </span>
    );

    return (
        <ul className={`list-words ${white && 'list-words--color-white'}`}>
            { items.map(({ text, quantity }) => (
                <li className="list-words__item" key={text}>
                    {text}
                    { quantity > 1 && renderDouble(quantity)}
                </li>
            )) }
        </ul>
    );
};

ListWords.defaultProps = {
    white: false,
};

ListWords.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
    })).isRequired,
    white: PropTypes.bool,
};

export default ListWords;
