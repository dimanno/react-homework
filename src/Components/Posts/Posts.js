// import {useEffect, useState} from "react";
// import {getPosts} from "../../Services/Users.service";
// import {Post} from "../Post/Post";
//
//
// export function Posts(id) {
//     const [posts, setPosts]=useState(null)
//     useEffect(()=>{getPosts(id).then(value => setPosts([...value]))},[])
//     return(
//         <di>
//             {
//               posts.map(value => <Post item={value} key={value.id}/>)
//             }
//         </di>
//     )
// }