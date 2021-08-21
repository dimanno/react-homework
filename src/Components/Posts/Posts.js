import './Posts.css'
import {useEffect, useState} from "react";
import {getPosts} from "../../Services/posts.service";
import {Post} from "../Post/Post";

function Posts() {
    let [posts, setPost] = useState([])
    useEffect(async ()=>{
      let response = await getPosts();
      console.log(response.data)
          setPost([...response.data])
    },[])
    return (
        <div className="postsBox">
            <h1>Posts List</h1>

            {
                posts.map(value => <Post item={value} key={value.id}/>)
            }
        </div>
    );
}
export {Posts}