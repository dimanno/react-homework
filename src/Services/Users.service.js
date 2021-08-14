
const url = 'https://jsonplaceholder.typicode.com/users'

let getUsers = () => {
    return (
        fetch(url)
            .then(value => value.json())
    )
}

let getPostOfUser = (id)=> {
    return (
        fetch(url + "/" + id + "/posts")
            .then(value => value.json())
            // .then(value => console.log(value))
    )
}

export {getUsers, getPostOfUser}