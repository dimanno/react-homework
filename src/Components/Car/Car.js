import './Car.css'
export function Car( {item}) {

    return (
        <div className="carBox">
            <div>
                <ul>
                    <li> Id -{item.id}</li>
                    <li>Model - {item.model}</li>
                    <li>Price - {item.price}</li>
                    <li>Year - {item.year}</li>
                </ul>
            </div>
        </div>
    );
}