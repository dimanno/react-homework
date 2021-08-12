import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../Services/users.service";
import {Comments} from "../Comments";

export function Post({item, item: {id, title, body}}) {

    let [comments, setComments] = useState([])
    useEffect(()=>{
        getCommentsOfPost(item.id).then(value => setComments([...value.data]))
    },[item.id])

    return (
        <div className={'postBox'}>
            <h3>{id} - Title: {title} </h3>
            <p>{body}</p>
            <Comments postComments={comments}/>
        </div>
    );
}