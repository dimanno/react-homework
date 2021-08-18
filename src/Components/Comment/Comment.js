
export function Comment({item}) {

return (
    <div className="userBox">
        <h2>{item.email}</h2>
        <p>{item.body}</p>
    </div>
);
}