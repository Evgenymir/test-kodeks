import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Others.scss';
import ListWords from '../list-words/List-words.jsx';

const mapStateToProps = ({ wordItems }) => {
    const { byId, allIds } = wordItems;
    return {
        items: allIds
            .map((item) => byId[item])
            .filter((item) => item.type === 'others'),
    };
};

const Others = ({ items }) => (
    <div className="wrapper-block others">
        <ListWords items={items} white />
    </div>
);

Others.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
    })).isRequired,
};

export default connect(mapStateToProps)(Others);
