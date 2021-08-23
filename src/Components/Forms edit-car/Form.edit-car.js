import {useEffect, useState} from "react";
import {editCar, getCars} from "../../Services/service.cars";

function EditCarForm() {
    let [formState, setFormState]=useState({model:'', price:'', year:''})
    let [checkCar, setCheckCar] = useState({})

    let [cars, setCars] = useState([])
    useEffect( ()=>{
        async function fetchData() {
            let carsList = await getCars()
            setCars([...carsList])
        }
        fetchData();
    },[checkCar])

    const onsubmit = (e) => {
        e.preventDefault()
    }

    function onFormChange(e)  {
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    const clickEditCar = (currentCar) => {
        editCar({id: currentCar.id, ...formState}).then(value => setCheckCar(value))
    }

    return (
        <div className={'editCarBox'}>

            <form onSubmit={onsubmit} id='"carform"'>
                <label htmlFor="cars">Choose a car:
                    <select name="cars" id="cars" form="carform" onChange={onFormChange}>
                        {cars.map(value => <option value={formState.model} key={value.id}>Model:{value.model} -- Price:{value.price} -- Year:{value.year} </option>)}
                    </select>
                </label>
                <label htmlFor="fname">Edit Car
                    <input type="text" name={"model"} value={formState.model} placeholder='model' onChange={onFormChange}/>
                    <input type="number" name={"price"} value={formState.price} placeholder='price' onChange={onFormChange}/>
                    <input type="number" name={"year"} value={formState.year} placeholder='year' onChange={onFormChange}/>
                </label>
                <button onClick={clickEditCar}>Change</button>
            </form>

        </div>
    )
}
 export {EditCarForm}