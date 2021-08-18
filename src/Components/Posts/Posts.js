import './Posts.css'
import {useEffect, useState} from "react";
import {getPosts, getUsers} from "../../Services/users.service";
import {User} from "../../User/User";

export function Posts() {
    let [posts, setPosts] = useState([])
    useEffect(()=> {
            getPosts().then(value => setPosts([value]))
        },
        [])
    return (
        <div className="usersBox">
            {
                posts.map(value => <Posts item={value} key={value.id}/>)
            }
        </div>
    );
}