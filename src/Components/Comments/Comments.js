import {useEffect, useState} from "react";
import {getComments, getUsers} from "../../Services/users.service";
import {Comment} from "../Comment/Comment";

export function Comments() {
    let [comments, setComment] = useState([])
    useEffect(()=> {
            getComments().then(value => setComment([value]))
        },
        [])
    return (
        <div className="usersBox">
            {
                comments.map(value => <Comment item={value} key={value.id}/>)
            }
        </div>
    );
}