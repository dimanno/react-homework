import './Users.css'
import {useEffect, useState} from "react";
import {getUsers} from "../../Services/users.service";
import {User} from "../../User/User";

export function Users() {
    let [users, setUsers] = useState([])
    useEffect(()=> {
        getUsers().then(value => console.log([value]))
        },
        [])
    return (
        <div className="usersBox">
            {
               users.map(value => console.log(value) )
            }
        </div>
    );
}