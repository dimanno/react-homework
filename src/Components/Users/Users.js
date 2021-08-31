import './Users.css'
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../../Services/service.user";
import {ADD_USER, LOAD_USERS} from "../../Redux/actions/user.actions";
import {addUserAction, loadUsers} from "../../Redux/actions/action.creator";
export function Users () {
    let state = useSelector(({users})=> users);
    let dispatch = useDispatch()

    useEffect(async ()=> {
        let response = await getUsers()
    })

    dispatch(loadUsers([]))
    dispatch(addUserAction({}))

    return (
         <div>

         </div>
    )
}