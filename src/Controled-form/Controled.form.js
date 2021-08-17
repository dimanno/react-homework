import {useState} from "react";
import {saveCar} from "../Services/car.service";
import {Cars} from "../Cars/Cars";
// import {Cars} from "../Cars/Cars";
export function ControledForm() {

    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');
    let [car, setCar] = useState({model:'',price:'',year:''})


    const onSubmitForm = (e) => {
       e.preventDefault()
        let tempCar = {model,price,year}
        setCar({...tempCar})
        console.log(car)
        saveCar(tempCar)
    }

    const onInputCangeModel = (e) => {
        let model = e.target.value
        setModel(model)
    }
    const onInputCangePrice = (e) => {
        let price = e.target.value
        setPrice(price)
    }
    const onInputCangeYear = (e) => {
        let year = e.target.value
        setYear(year)
    }
    return (
        <div className="controledFormBox">
            <form onSubmit={onSubmitForm}>
                <input type="text" name="model" value={model} placeholder='enter model' onInput={onInputCangeModel}/>
                <input type="number" name={'price'} value={price} placeholder='enter price' onInput={onInputCangePrice}/>
                <input type="number" name={'year'} value={year} placeholder='enter year'onInput={onInputCangeYear}/>
                <input type="submit" value="Save"/>
            </form>
            <div>
                <Cars/>
            </div>
        </div>
    );
}