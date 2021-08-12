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
            <h3>{id} - Name: {item.name}, ({item.username})</h3>
            <ul>Contact
                <li>Email - {item.email}</li>
                <li>Phone - {item.phone}</li>
            </ul>
            <Address item={address}/>
            <Posts userPosts={posts}/>

        </div>
    );
}

export {User}