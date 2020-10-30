import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Letters.scss';
import ListWords from '../list-words/List-words.jsx';

const mapStateToProps = ({ wordItems }) => {
    const { byId, allIds } = wordItems;
    return {
        items: allIds
            .map((item) => byId[item])
            .filter((item) => item.type === 'letters'),
    };
};

const Letters = ({ items }) => (
    <div className="wrapper-block letters">
        <ListWords items={items} />
    </div>
);

Letters.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
    })).isRequired,
};

export default connect(mapStateToProps)(Letters);
