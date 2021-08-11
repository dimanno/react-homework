import {getComments} from "../../user service/comments.service";
import {useEffect, useState} from "react";
import {Comment} from "../Comment/Comment";


export function Comments() {
   let [comments, setComments] = useState([])
    useEffect(() =>{
        getComments().then(({data}) => setComments([...data]))
    }, [comments.id])

    return (
        <div>
            {
                comments.map(value => <Comment item={value} key={value.id}/>)
            }
        </div>
    )
}

