import './Users.css'
import {useEffect, useState} from "react";
import {getUsers} from "../../Services/Users.service";
import {User} from "../User/User";

export function Users() {
    let [users, setUsers] =useState([])
    useEffect(()=> {
        getUsers().then(value => setUsers([...value]))
    }, [])

    const showPosts =()=>{

    }

    return (
        <div className={'wrapUsersBox'}>
            <div className={'usersBox'}>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
            </div>
            <div className={'postsBox'}></div>
        </div>
    )
}