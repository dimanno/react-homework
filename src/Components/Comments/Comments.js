import {getComments} from "../../user service/comments.service";
import {useEffect, useState} from "react";
import {Comment} from "../Comment/Comment";


export function Comments() {
   let [comments, setComments] = useState([])

    useEffect(() =>{
        getComments().then(value => setComments([...value.data]))
    }, [])

    return (
        <div>
            <h2>Comments</h2>
            {
                // comments.map(value => <Comment item={value} key={value.id}/>)
                comments.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    )
}

