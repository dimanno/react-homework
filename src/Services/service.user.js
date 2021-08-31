
const url = 'https://jsonplaceholder.typicode.com/'

const getUsers = () => {
  return fetch(url + '/users')
}

const addUser = ({user}) => {
    return  fetch(url + '/users', {
        method: 'POST',
        body: JSON.stringify({user}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(value => value.json())
}

export {getUsers, addUser}