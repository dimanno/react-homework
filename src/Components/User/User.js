import {Address} from "../Address/Address";

export function User({item:{id,name,username,email,phone, website, address}}) {
    return (
        <div className="main">
            <h3>{id} - Name: {name}, ({username})</h3>
            <ul> Contact
                <li>Email - {email}</li>
                <li>Phone - {phone}</li>
                <li>Website - {website}</li>
            </ul>
            <Address address = {address}/>
        </div>
    );
}