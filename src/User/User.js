import './User.css'
export function User({item}) {

    return (
        <div className="userBox">
            <h2>{item.id} - Name {item.name}</h2>
        </div>
    );
}