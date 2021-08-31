const url = 'https://jsonplaceholder.typicode.com'
const fetchUsers = () => {
return     fetch(url + '/users')
        .then(value => value.json())
 }

 const saveUsers = ({name, username}) => {
 return   fetch(url + '/users', {
       method: "POST",
       body: JSON.stringify({name, username}),
       headers: {
           'Content-type': 'application/json; charset=UTF-8',
       },
   })
       .then((response) => response.json())
 }

 export {fetchUsers, saveUsers}