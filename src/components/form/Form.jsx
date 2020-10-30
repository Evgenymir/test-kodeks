import React from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
import { connect } from 'react-redux';
import { updateText, emptyText, addWords } from '../../actions/index';

const mapStateToProps = (state) => {
    const { text, error } = state;
    return {
        text,
        error,
    };
};

class Forms extends React.Component {
    handleChangeInput = ({ target }) => {
        const { dispatch } = this.props;
        dispatch(updateText(target.value));
    };

    handleKeyPressEnter = (e) => {
        if (e.key !== 'Enter') {
            return;
        }
        const { text, dispatch } = this.props;

        if (text.trim() === '') {
            dispatch(emptyText());
            return;
        }

        dispatch(addWords(text));
    };

    render() {
        const { text, error } = this.props;
        return (
            <div className="wrapper-block form">
                <div className="field">
                    <input
                        type="text"
                        name="message"
                        className="field__input"
                        value={text}
                        onChange={this.handleChangeInput}
                        onKeyPress={this.handleKeyPressEnter}
                        placeholder="Введите текст"
                    />
                    { error && <span className="field__error">{error}</span> }
                </div>
            </div>
        );
    }
}

Forms.propTypes = {
    dispatch: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Forms);
