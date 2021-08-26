const reducer = (state = {a: 0, b: 0, c: 0}, {key, count, act}) => {
    switch (act) {
        case 'Plus':
            console.log(state[key]);
            return {...state, [key]: state[key] + count};
        case 'Minus':
            return {...state, [key]: state[key] - count};

        default:
            return {...state};
    }
}

export {reducer}