import './Comment.css'

export function Comment({item, chosenComment}) {
    const onclickDetailsComment = () => {
      chosenComment()
    }
    return (
        <div className="commentBox">
            <ul>
                <li>{item.id} - {item.name}</li>
            </ul>
            <button onClick={onclickDetailsComment}>Details</button>
        </div>
    );
}