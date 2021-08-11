
function Comment({item: id, name, body}) {
    return(
        <div>
            <h4>{id} - {name}</h4>
            <p>{body}</p>
        </div>
    )
}

export {Comment}