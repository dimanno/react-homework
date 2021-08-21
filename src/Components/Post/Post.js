import './Post.css'

export function Post({item}) {
    return (
        <div className="postBox">
            {item.id} - {item.title}
        </div>
    );
}