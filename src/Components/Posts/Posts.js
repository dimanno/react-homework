import './Posts.css'
import {useEffect, useState} from "react";
import {getPosts} from "../../Services/users.service";
import {Post} from "../Post/Post";


function Posts() {
    let [posts, setPosts] = useState([])
    useEffect(()=> {
            getPosts().then(({data}) => setPosts([...data]))
        },[])
    return (
        <div className="usersBox">
            {
                posts.map(value => <Post item={value} key={value.id}/>)
            }
        </div>
    );
}

export {Posts}