import './Post.css'
export function Post({item}) {

    return (
        <div className="postBox">
            <h2>Title - {item.title}</h2>
            <p>{item.body}</p>
        </div>
    );
}