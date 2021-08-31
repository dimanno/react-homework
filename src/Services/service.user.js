import {addUserAction} from "../Redux/actions/action.creator";
const url = 'https://jsonplaceholder.typicode.com'

const getUsers = async () => {
const data = await(await fetch(url + '/users')).json()
    //const response = await fetch(url + '/users')
    //const data = await response.json
    console.log(data)
    return data
}
//
// const getUsers = () => {
//    return fetch(url + '/users')
//       .then(value => value.json())
//        .then((json)=>console.log(json))
// }

const addUser = async (dispatch, {name, email}) => {
   let response = await  fetch(url + '/users', {
        method: 'POST',
        body: JSON.stringify({name, email}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(value => value.json());
    dispatch(addUserAction(response));
    return response
}

export {getUsers, addUser}