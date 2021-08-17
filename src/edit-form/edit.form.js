import {useState} from "react";
import {editCar} from "../Services/car.service";
import './edit.form.css'

export function EditForm({id}) {
    console.log(id);
    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');
    let [car, setCar] = useState({model:'',price:'',year:''})



    const onSubmitForm = (e) => {
        e.preventDefault()
        let tempCar = {model,price,year}
        setCar({...tempCar})
        editCar({...tempCar, id})

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
        <div className="editFormBox">
            <form className={'editForm'} onSubmit={onSubmitForm}>
                <h2>Edit Car</h2>
                <input type="text" name="model" value={model} placeholder='edit model' onInput={onInputCangeModel}/>
                <input type="number" name={'price'} value={price} placeholder='edit price' onInput={onInputCangePrice}/>
                <input type="number" name={'year'} value={year} placeholder='edit year' onInput={onInputCangeYear}/>
                <input className={'buttonEdit'} type="submit" value="Edit car"/>
            </form>
        </div>
    );
}