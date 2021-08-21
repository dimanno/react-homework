import './Post.css'

export function Post(item) {
    return (
        <div className="postBox">
            {item.title}
        </div>
    );
}