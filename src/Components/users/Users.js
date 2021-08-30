import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {fetchUsers, saveUsers} from "../../services/users.service";
import {User} from "../User/User";
import {ADD_USER, CLEAR_USERS} from "../../redux/actions/actionTypes";
import {getUsers, setUsers} from "../../redux/actions/actions";
import './users.css'
function Users() {
const state =  useSelector((state)=> state)
    const dispatch = useDispatch()
    let {users} = state;
    useEffect( ()=>{
        fetchUsers().then(value => dispatch(getUsers(value)))
    },[])
    const clickClear = () => {
        dispatch({type: CLEAR_USERS})
    }

    const clickSet = () => {
        fetchUsers().then(value => {
            dispatch(getUsers(value))
        })
    }

    const onSabmit = (e) => {
      e.preventDefault()
        let user = {[e.target.name]: e.target.name.value}
        saveUsers(user).then(value => {
            console.log(value)
            dispatch(setUsers(value))
        })
    }

    const changeFormState = (e) => {
        let user = {[e.target.name]: e.target.value}
      dispatch({type: ADD_USER, payload: user})
    }


    return (
        <div className="usersBox">
            <div className={'buttonBox'}>
                <button onClick={clickClear}>Clear users</button>
                <button onClick={clickSet}>Set users</button>
            </div>
            <hr/>
            <div className={'formBox'}>
             <form onSubmit={onSabmit}>
                <input type="text" name="name" placeholder='name' onChange={changeFormState}/>
                 <input type='text' name='username' placeholder='username' onChange={changeFormState}/>
                 <button>Add User</button>
             </form>
            </div>


            {
                users.map(value => <User item={value} key={value.id}/> )
            }
        </div>
    );
}

export {Users}