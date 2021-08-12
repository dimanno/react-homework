import {getUsers} from "../../Services/users.service";
import {useEffect, useState} from "react";
import {User} from "../User/User";

function Users() {
  let [users, setUsers] = useState([]);

    useEffect(()=> {
        getUsers().then(value => setUsers(value.data));
    },[]);

    return (
        <div>
            {
                users.map(value => <User item={value} key={value.id}/>)
            }
        </div>
    );
}

export {Users}
