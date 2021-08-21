import './User.css'
import {
    Link,
    withRouter
} from "react-router-dom";

function User({item, history}) {
    console.log(history);
    const navigateTo = () => {
        history.push(`/users/${item.id}`);
    };
    return (
        <div className={'userBox'}>
            {/*{item.name} - <Link to={{pathname:`/users/${item.id}`,state : item}}> user details</Link>*/}
            {/*{item.name} - <Link to={`/users/${item.id}`}> user details api sub fetch</Link>*/}
            {item.name} - <button onClick={navigateTo}>User details</button>


        </div>
    );
}

export default withRouter(User);
