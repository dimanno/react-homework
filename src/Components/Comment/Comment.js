import './Comment.css'

export function Comment({item, chosenComment}) {
    console.log(chosenComment);
    const onclickDetailsComment = () => {
        chosenComment(item)
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