import {Address} from "../Address/Address";

export function User({item, item:{address}}) {
    return (
        <div className="main">
            <h3>{item.id} - Name: {item.name}, ({item.username})</h3>
            <ul> Contact
                <li>Email - {item.email}</li>
                <li>Phone - {item.phone}</li>
                <li>Website - {item.website}</li>
            </ul>
            <Address address = {address}/>
        </div>
    );
}