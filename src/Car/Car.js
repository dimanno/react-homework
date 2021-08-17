import './Car.css'
import {deleteCar,} from "../Services/car.service";

export function Car({item, editCar, setEditCar, chosen}) {

    return (
        <div className="carBox">
            <div className={'cardCar'}>
                <div>
                    <ul>
                         <li> Id -{item.id}</li>
                         <li>Model - {item.model}</li>
                         <li>Price - {item.price}</li>
                         <li>Year - {item.year}</li>
                    </ul>
                </div>
                <div className={'buttonsBox'}>
                    <button onClick={() => {
                        chosen(item.id)
                        setEditCar(!editCar)
                    }}>Edit Car</button>
                    <button onClick={() => deleteCar(item.id)}>Delete Car</button>
                </div>
            </div>
        </div>
    );
}