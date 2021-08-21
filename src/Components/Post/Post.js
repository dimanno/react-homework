import './Post.css'
import {
    Route,
    Link,
} from "react-router-dom";
import {DetailsPost} from "../DetailsPost/DetailsPost";


export function Post({item:{id,title}, item, url}) {
    return (

        <div className="postBox">
            <div>
                {id} - {title} <Link to={{pathname:`${url}/${id}`, state : item}}>Details</Link>
            </div>
            <div>
                <Route path={`${url}/${id}`} component={DetailsPost}/>
            </div>
        </div>


    );
}