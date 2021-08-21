import {useEffect, useState} from "react";
import User from "../User/User";
import {getUsers} from "../../Service/user.service";
import './Users.css'
import {Route, useLocation} from "react-router-dom";
import {UserDetailsAPI} from "../UserDetailsApi/UserDetailsApi";

export  function Users(props) {
    let {match: {url}, history} = props;
    let [users, setUsers] = useState([]);

    useEffect(async () => {
        let response = await getUsers();
        setUsers([...response]);
    }, [])
    return (
        <div className={'usersBox'} >

            {users.map(value => <User history={history} item={value} key={value.id}/>)}
            {/*{users.map(value => <User  item={value} key={value.id}/>)}*/}
            <Route path={`${url}/:id`} render={(props) => {
                return <UserDetailsAPI{...props} />
            }}/>

        </div>
    );
}
