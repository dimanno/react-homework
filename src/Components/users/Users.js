import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {getUsers, saveUsers} from "../../services/users.service";
import {User} from "../User/User";

function Users() {
const state =  useSelector((state)=> state)
    const dispatch = useDispatch()
    let {users} = state;
    useEffect( ()=>{
        getUsers().then(value => {
                dispatch( {type: 'FETCH_USERS', payload: value})
            })
    },[])
    const clickClear = () => {
        dispatch({type: 'CLEAR_USERS'})
    }

    const clickSet = () => {
        getUsers().then(value => {
            dispatch( {type: 'FETCH_USERS', payload: value})
        })
    }

    const onSabmit = (e) => {
      e.preventDefault()
        let user = {[e.target.name]: e.target.name.value}
        saveUsers(user).then(value => {
            console.log(value)
            dispatch({type: 'SAT_USERS', payload: value})
        })
    }

    const changeFormState = (e) => {
        let user = {[e.target.name]: e.target.value}
      dispatch({type: 'ADD_USER', payload: user})
    }

    // const clickAddUser = (e) => {
    //     let user = {[e.target.name]: e.target.name.value}
    //     saveUsers(user).then(value => {
    //         console.log(value)
    //         dispatch({type: 'SAT_USERS', payload: value})
    //     })
    // }

    return (
        <div className="usersBax">
            <button onClick={clickClear}>Clear users</button>
            <button onClick={clickSet}>Set users</button>
            <hr/>
             <form onSubmit={onSabmit}>
                <input type="text" name="name" placeholder='name' onChange={changeFormState}/>
                 <input type='text' name='username' placeholder='username' onChange={changeFormState}/>
                 <button>Add User</button>
             </form>


            {
                users.map(value => <User item={value} key={value.id}/> )
            }
        </div>
    );
}

export {Users}