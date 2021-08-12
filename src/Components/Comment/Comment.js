import './Comment.css'
export function Comment({item: {id, name, body}}) {
    return(
        <div className={'commentBox'}>
            <h4>{id} - {name}</h4>
            <p>{body}</p>
        </div>
    )
}

