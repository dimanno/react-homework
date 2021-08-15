import './Posts.css'
import {useEffect, useState} from "react";
import {getCommentsOfPost, getPosts} from "../../services/service.posts";
import {Post} from "../Post/Post";

export function Posts() {
    let [posts, setPosts] = useState([])
    let [post, setPost] = useState({})
    // let [comments, setComment] = useState([])
    useEffect(()=>{getPosts().then(value => setPosts([...value]))},[])

    const chosenPost = (post) => {
        setPost(post)
    }
    return (
        <div className={'wrapPostsBox'}>
            <div className="postsBox">
                {
                    posts.map(value => <Post
                        item={value}
                        key={value.id}
                        chosenPost={chosenPost}/>)
                }
            </div>
            <div className={'detalPostBox'}>
                {post && <p>{post.body}</p>}

            </div>
        </div>

    );
}