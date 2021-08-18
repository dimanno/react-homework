import './Users.css'
import {useEffect, useState} from "react";
import {getUsers} from "../../Services/users.service";
import {User} from "../../User/User";

export function Users() {
    let [users, setUsers] = useState([])
    useEffect(()=> {
        getUsers().then(({data}) => setUsers([...data]))
        },
        [])
    return (
        <div className="usersBox">
            {
               users.map(value => <User item={value} key={value.id}/>)
            }
        </div>
    );
}