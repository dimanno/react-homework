import {Post} from "../Post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../user service/post.service";

export function Posts() {
    let [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(value => setPosts(value.data))
    }, [])

return (
    <div className={'posts'}>

        {
            posts.map(value => <Post item ={value} key={value.id}/> )
        }

    </div>
);
}