import './user.css'

function User({item}) {
    return (
        <div className="userBox">
            <ul>
            <li>{item.name} - {item.username}</li>
            </ul>
        </div>
    );
}
export {User}

