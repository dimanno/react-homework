import './Users.css'
import {useEffect, useState} from "react";
import {getPostOfUser, getUsers} from "../../Services/Users.service";
import {User} from "../User/User";
import {Post} from "../Post/Post";

export function Users() {
    let [users, setUsers] =useState([])
    let [user, setUser] =useState(null)
    let [posts] = useState({})
    useEffect(()=> {
        getUsers().then(value => setUsers([...value]))
    }, [])

    const showPosts =(u)=>{
        setUser(u)
        getPostOfUser(u.id).then(value => <Post item={value}/>)
    }

    return (
        <div className={'wrapUsersBox'}>
            <div className={'usersBox'}>
                {
                    users.map(value => <User
                        item={value} key={value.id}
                        showPosts={showPosts}/>)
                }
            </div>
             <div className={'postsBox'}>
                 {user && JSON.stringify(user)}
                 <Post item={posts}/>
            </div>
        </div>
    )
}