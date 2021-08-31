import {CLEAR_USERS, FETCH_USERS, SET_USERS, ADD_USER, CHANGE_INPUT_VALUE} from "../actions/actionTypes";

const initialState = {users: []}
export const userReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case FETCH_USERS:
            console.log(action.payload)
            return {...state, users: [...action.payload]}
        case CLEAR_USERS:
            return {...state, users: []}
        case SET_USERS:
            return {...state}
        case ADD_USER:
            let newUser = action.payload
            let newUsersArray = [...state.users, newUser]
            return {...state, users: {newUsersArray}}
        case CHANGE_INPUT_VALUE:
            return {...state}

        default:
            return state
    }
}