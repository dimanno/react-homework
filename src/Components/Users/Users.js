import './Users.css'
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {addUser, getUsers} from "../../Services/service.user";
import {User} from "../User/User";
export function Users () {
    let state = useSelector(state=> state);
    let {users} = state
    let dispatch = useDispatch()
    let [inputState, setInputState] = useState({name:'', email:''})

    useEffect(  ()=> {
       dispatch(getUsers());

    },[])

    // dispatch(addUserAction({}))
    const onSubmit = (e) => {
      e.preventDefault()
    }

    const stateInputChange = (e) => {
        setInputState({...inputState, [e.target.name]: e.target.value})
    }

    const clickAdd = () => {
        dispatch(addUser(inputState))
    }

    return (
         <div>
             <form onSubmit={onSubmit}>
                 <input type='text' name='name' value={inputState.name} placeholder='name' onChange={stateInputChange}/>
                 <input type='email' name='email' value={inputState.email} placeholder='email' onChange={stateInputChange}/>
                 <button onClick={clickAdd}>Add User</button>
             </form>
             {
                 users.map(value => <User item={value} key={value.id}/>)
             }
         </div>
    )
}