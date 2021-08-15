import './Post.css'
export function Post({item, chosenPost}) {
    const onclickDetailsPost = () => {
        chosenPost(item)
    }
    return (
        <div className="postBox">
            <h4>{item.id} Title: {item.title}</h4>
            <p>{item.body}</p>
            <button onClick={onclickDetailsPost}>Details</button>
        </div>
    );
}