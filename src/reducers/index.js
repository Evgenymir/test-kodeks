import { combineReducers } from 'redux';
import CheckWordsForRegex from '../assets/js/regExp';

const initialWordsState = {
    byId: {},
    allIds: [],
};

const text = (state = '', action) => {
    switch (action.type) {
        case 'TEXT_UPDATE': {
            return action.payload.text;
        }
        case 'TEXT_EMPTY': {
            return '';
        }
        case 'ADD_WORDS': {
            return '';
        }
        default: {
            return state;
        }
    }
};

const error = (state = '', action) => {
    switch (action.type) {
        case 'TEXT_EMPTY': {
            return 'Поле не может быть пустым';
        }
        case 'ADD_WORDS': {
            return '';
        }
        default: {
            return state;
        }
    }
};

const wordItems = (state = initialWordsState, action) => {
    switch (action.type) {
        case 'ADD_WORDS': {
            const { byId, allIds } = state;
            const { words } = action.payload;
            const typeWords = CheckWordsForRegex(words);
            const currentWord = byId[words];

            if (currentWord) {
                const { quantity } = currentWord;
                return {
                    ...state,
                    byId: { ...byId, [words]: { ...currentWord, quantity: quantity + 1 } },
                };
            }

            const newWords = {
                text: words,
                type: typeWords,
                quantity: 1,
            };

            return {
                ...state,
                byId: { ...byId, [words]: newWords },
                allIds: [...allIds, words],
            };
        }
        default: {
            return state;
        }
    }
};

const rootReducers = combineReducers({
    text,
    error,
    wordItems,
});

export default rootReducers;
