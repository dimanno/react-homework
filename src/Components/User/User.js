import {Address} from "../Address/Address";
import {Post} from "../Post/Post";

function User({item:{id,name,username,email,phone,website,address,post}}) {

    return (
        <div className="userBox">
            <h3>{id} - Name: {name}, ({username})</h3>
            <ul> Contact
                <li>Email - {email}</li>
                <li>Phone - {phone}</li>
                <li>Website - {website}</li>
            </ul>
            <Address address = {address}/>
            <Post post ={post}/>

        </div>
    );
}

export {User}