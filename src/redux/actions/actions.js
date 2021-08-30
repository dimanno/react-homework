import {FETCH_USERS, SET_USERS} from "./actionTypes";

const getUsers = (value) => {
    return {type: FETCH_USERS, payload: value}
}
const setUsers = (value) => {
  return {type: SET_USERS, payload: value}
}

export {getUsers, setUsers}