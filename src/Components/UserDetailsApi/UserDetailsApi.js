import {useEffect, useState} from "react";
import {getUser} from "../../Service/user.service";

export function UserDetailsAPI(props) {
    let {match: {params: {id}}} = props;
    let [user, setUser] = useState({});

    useEffect(() => {
        getUser(id).then(value => setUser({...value}));
    }, [id]);

    return (
        <div>
            {JSON.stringify(user)}

        </div>
    );
}
