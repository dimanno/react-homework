import {Post} from "../Post/Post";
export function Posts({userPosts}) {
 return (
        <div>
            {
                userPosts.map(value => <Post item ={value} key={value.id}/> )
            }
        </div>
 );
}