import {LOAD_USERS, ADD_USER} from "./user.actions";

const loadUsers = (payload) => {
  return {
      type: LOAD_USERS, payload: payload
  }
}

const addUserAction = (payload) => {
  return {
      type: ADD_USER, payload: payload
  }
}

export {loadUsers, addUserAction}