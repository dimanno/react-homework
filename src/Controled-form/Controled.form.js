import {useState} from "react";
import {saveCar} from "../Services/car.service";


export function ControledForm() {

    let [model, setModel] = useState('model');
    let [price, setPrice] = useState('price');
    let [year, setYear] = useState('year');
    let [car, setCar] = useState({model:'', price:'', year:''})

    const onSubmitForm = (e) => {
       e.preventDefault()
        let tempCar = {model, price, year}
        setCar({...tempCar})
        saveCar(car)
    }
    const onInputCangeModel = (e) => {
        let model = e.target.value
        setModel(model)
        // carForSave.model = model
    }
    const onInputCangePrice = (e) => {
        let price = e.target.value
        setPrice(price)
        // carForSave.price = price
    }
    const onInputCangeYear = (e) => {
        let year = e.target.value
        setYear(year)
        // carForSave.year = year
    }
    return (
        <div className="controledFormBox">
            <form onSubmit={onSubmitForm}>
                <input type="text" name="model" value={model} onInput={onInputCangeModel}/>
                <input type="number" name={'price'} value={price} onInput={onInputCangePrice}/>
                <input type="number" name={'year'} value={year} onInput={onInputCangeYear}/>

                <input type="submit" value="Save"/>
            </form>
            <div>
                {JSON.stringify(car)}
            </div>
        </div>
    );
}