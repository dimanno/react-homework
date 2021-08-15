import './Posts.css'
import {useEffect, useState} from "react";
import {getPosts} from "../../services/service.posts";
import {Post} from "../Post/Post";

export function Posts() {
    let [posts, setPosts] = useState([])
    let [post, setPost] = useState({})
    useEffect(()=>{getPosts().then(value => setPosts([...value]))},[])

    const chosenPost = (post) => {
      (setPost(post))
    }
    return (
        <div className={'wrapPostsBox'}>
            <div className="postsBox">
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
            </div>
            <div>
                {post }
            </div>
        </div>

    );
}