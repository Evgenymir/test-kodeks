const checkWordsForRegex = (words) => {
    const regNumber = /^[0-9]+(\.|,)?[0-9,.]+?[^.,]$/;
    const regLetter = /^\D+$/;

    if (words.match(regNumber)) {
        return 'numbers';
    }

    if (words.match(regLetter)) {
        return 'letters';
    }

    return 'others';
};

export default checkWordsForRegex;
