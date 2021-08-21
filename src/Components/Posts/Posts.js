import './Posts.css'
import {useEffect, useState} from "react";
import {getPosts} from "../../Services/posts.service";
import {Post} from "../Post/Post";

function Posts() {
    let [posts, setPost] = useState([])
    useEffect(async ()=>{
      let response = await getPosts();
      console.log(response)
          setPost([...response.data])
    },[])
    return (
        <div className="postsBox">
            {
                posts.map(value => <Post item={value} key={value.id}/>)
            }
        </div>
    );
}
export {Posts}