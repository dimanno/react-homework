import './Posts.css'
import {useEffect, useState} from "react";
import {getCommentsOfPost, getPosts} from "../../services/service.posts";
import {Post} from "../Post/Post";
import {Comment} from "../Comment/Comment";

export function Posts() {
    let [posts, setPosts] = useState([])
    let [post, setPost] = useState(null)
    let [comments, setComments] = useState([])
    let [comment, setComment] = useState(null)
    useEffect(()=>{getPosts().then(value => setPosts([...value]))},[])

    const chosenPost = (post) => {
        setPost(post)
        getCommentsOfPost(post.id).then(value => setComments(value))
    }
    const chosenComment = (com) => {
        setComment(com)
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
                <div className={'comments'}>
                    {
                    comments.map(value => <Comment
                        item={value}
                        key={value.id}
                        chosenComent={chosenComment}/>)
                    }
                    {comment && <p>{comment.body}</p>}
                </div>
            </div>
        </div>
    );
}