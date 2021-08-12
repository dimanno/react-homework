import './Comment.css'
export function Comment({item: {id, name, body}}) {
    return (
        <div className={'commentBox'}>
            <h5>{id} - Title: {name} </h5>
            <p>{body}</p>
        </div>
    );
}