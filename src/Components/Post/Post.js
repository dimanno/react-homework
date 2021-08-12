import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../Services/users.service";
import {Comments} from "../Comments/Comments";
import './Post.css'

export function Post({item, item: {id, title, body}}) {

    let [comments, setComments] = useState([])
    useEffect(()=>{
        getCommentsOfPost(item.id).then(value => setComments([...value.data]))
    },[item.id])

    return (
        <div className={'postBox'}>
            <div className={'content'}>
                <h4>{id} - Title: {title} </h4>
                <p>{body}</p>
            </div>
            <Comments postComments={comments}/>
        </div>
    );
}