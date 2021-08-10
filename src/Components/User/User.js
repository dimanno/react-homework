import './User.css';
import {Address} from "../Address/Address";

export default function User(props) {
    const {item:{id, uName, username, email, phone, website, address}} = props;
    return (
        <div className="UserBox">
            <h2>{id} - Name: {uName} {username}</h2>
            <ul>Contact
                <li>Email - {email}</li>
                <li>Phone - {phone}</li>
                <li>Website - {website}</li>
            </ul>
            <Address address={address}/>
        </div>
    );
}