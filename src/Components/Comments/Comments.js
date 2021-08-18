import {useEffect, useState} from "react";
import {getComments} from "../../Services/users.service";
import {Comment} from "../Comment/Comment";

export function Comments() {
    let [comments, setComment] = useState([])
    useEffect(()=> {
            getComments().then(({data}) => setComment([...data]))
        },[])
    return (
        <div className="commentsBox">
            {
                comments.map(value => <Comment item={value} key={value.id}/>)
            }
        </div>
    );
}