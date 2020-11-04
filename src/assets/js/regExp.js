const checkWordsForRegex = (words) => {
    const regNumber = /^\d+$/;
    const regLetter = /^[a-zA-Zа-яА-Я ]+$/;

    if (words.match(regNumber)) {
        return 'numbers';
    }

    if (words.match(regLetter)) {
        return 'letters';
    }

    return 'others';
};

export default checkWordsForRegex;
