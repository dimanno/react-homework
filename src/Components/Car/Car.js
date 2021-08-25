import './car.css'
function Car({item, deleteCar}) {
let clickDelete = () => {
    return deleteCar(item.id)
}
    return(
        <div className={'carBox'}>
            <h5>ID - {item.id}</h5>
            <h5>Model - {item.model}</h5>
            <h5>Price - {item.price}</h5>
            <h5>Year - {item.year}</h5>
            <button onClick={clickDelete}>Delete</button>
        </div>
    )
}
export {Car}