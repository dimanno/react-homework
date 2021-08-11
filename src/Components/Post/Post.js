
export function Post({item}) {
    return (
        <div>
            <h3>{item.id} - Title: {item.title} </h3>
            <p>{item.body}</p>
        </div>
    );
}