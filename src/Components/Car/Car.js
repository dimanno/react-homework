
function Car({item, deleteCar}) {
let clickDelete = () => {
    return deleteCar(item.idi)
}
    return(
        <div className={'carBox'}>
           ID - {item.id}  Model - {item.model}   Price - {item.price}   Year - {item.year}
            <button onClick={clickDelete}>Delete</button>
        </div>
    )
}
export {Car}