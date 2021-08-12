import './User.css'
import {Address} from "../Address/Address";
import {Posts} from "../Posts/Posts";
import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../Services/users.service";

function User({item, item:{id,address}}) {
    let [posts, setPostsOfUser] = useState([])
    useEffect(()=>{
        getPostsOfUser(item.id).then(value => setPostsOfUser([...value.data]) )
    },[item.id])


    return (
        <div className="userBox">
            <h2>{id} - Name: {item.name}, ({item.username})</h2>
            <ul>Contact
                <li>Email - {item.email}</li>
                <li>Phone - {item.phone}</li>
            </ul>
            <Address item={address}/>
            <h3>Posts</h3>
            <Posts userPosts={posts}/>
        </div>
    );
}

export {User}