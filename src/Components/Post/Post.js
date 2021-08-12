import './Post.css'
export function Post({item:{id,title,body}}) {
    return (
        <div className= {'postBox'}>
            <h3>{id} - Title: {title} </h3>
            <p>{body}</p>
        </div>
    );
}