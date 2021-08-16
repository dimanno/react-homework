
export function Car({item}) {
    return (
        <div className="carBox">
            <ul>
                <li>{item.id}</li>
                <li>{item.model}</li>
                <li>{item.price}</li>
                <li>{item.year}</li>
            </ul>
        </div>
    );
}