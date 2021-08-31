import {addUserAction, loadUsers} from "../Redux/actions/action.creator";

const url = 'https://jsonplaceholder.typicode.com'

const getUsers = () => async (dispatch) => {
const data = await(await fetch(url + '/users')).json()
    //const response = await fetch(url + '/users')
    //const data = await response.json
    console.log(data)
    dispatch(loadUsers(data))
    return data
}

const addUser = (payload) => (dispatch) => {
    return  fetch(url + '/users', {
        method: 'POST',
        body: JSON.stringify({name: payload.name, email: payload.email}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(value => value.json())
        .then(value => {
            console.log(value)
            dispatch(addUserAction(value))})
}

export {getUsers, addUser}