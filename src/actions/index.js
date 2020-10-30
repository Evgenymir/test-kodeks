export const updateText = (text) => ({
    type: 'TEXT_UPDATE',
    payload: {
        text,
    },
});

export const emptyText = () => ({
    type: 'TEXT_EMPTY',
});

export const addWords = (words) => ({
    type: 'ADD_WORDS',
    payload: {
        words,
    },
});

export const updateTask = (id) => ({
    type: 'UPDATE_TASK',
    payload: {
        id,
    },
});

export const removeTask = (id) => ({
    type: 'REMOVE_TASK',
    payload: {
        id,
    },
});
