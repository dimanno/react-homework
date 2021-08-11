import {getComments} from "../../user service/comments.service";
import {useEffect, useState} from "react";
import {Comment} from "../Comment/Comment";


export function Comments() {
   let [comments, setComments] = useState([])

    useEffect(() =>{
        // getComments().then(value => setComments([...value.data]))
    }, [])

    return (
        <div>
            {
                comments.map(value => <Comment item={value} key={value.id}/>)
            }
        </div>
    )
}

