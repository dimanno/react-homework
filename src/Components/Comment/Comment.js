export function Comment({item: {id, name, body}}) {
    return (
        <div className={'commentBox'}>
            <h3>{id} - Title: {name} </h3>
            <p>{body}</p>
        </div>
    );
}