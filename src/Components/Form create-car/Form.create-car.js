import {useState} from "react";
import {saveCar} from "../../Services/service.cars";
import {Cars} from "../Cars/Cars";

function CreateCar() {
    let [formState, setFormState]=useState({model:'', price:'', year:''})
    let [checkCar, setCheckCar] = useState({})
    const onsubmit = (e) => {
        console.log(e.target.model.value)
        console.log(e.target.price.value)
        e.preventDefault()
        // saveCar(formState).then(value => setCheckCar(value))
    }

    function onFormChange(e)  {
      setFormState({...formState, [e.target.name]: e.target.value})
    }
    const clickSaveCar = () => {
        saveCar(formState).then(value => setCheckCar(value))
    }

    return(
        <div className={'createCarBox'}>
                <form onSubmit={onsubmit}>
                    <input type="text" name={"model"} value={formState.model} placeholder='model' onChange={onFormChange}/>
                    <input type="number" name={"price"} value={formState.price} placeholder='price' onChange={onFormChange}/>
                    <input type="number" name={"year"} value={formState.year} placeholder='year' onChange={onFormChange}/>
                    <button onClick={clickSaveCar}>Save</button>
                </form>
            <div>
                <Cars checkCar={checkCar}/>
            </div>
        </div>
    )
}

export {CreateCar}