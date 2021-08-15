import './Comment.css'

export function Comment({item, chosenComment}) {
    const onclickDetalComment = () => {
      chosenComment(item)
    }
    return (
        <div className="commentBox">
            <ul>
                <li>{item.id} - {item.name}</li>
            </ul>
            <button onClick={onclickDetalComment}>Details</button>
        </div>
    );
}