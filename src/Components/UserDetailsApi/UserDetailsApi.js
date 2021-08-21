import {useEffect, useState} from "react";
import {getUser} from "../../Service/user.service";
import './userDetails.css'
export function UserDetailsAPI(props) {
    let {match: {params: {id}}} = props;
    let [user, setUser] = useState({});

    useEffect(() => {
        getUser(id).then(value => setUser({...value}));
    }, [id]);

    return (
        <div className={'userDetails'}>
            {<h4>Username - {user.username}</h4>}
            {<ul>Contacts
                <li>Email -{user.email}</li>
                <li>Phone - {user.phone}</li>
                <li>Website - {user.website}</li>
            </ul>}
        </div>
    );
}
