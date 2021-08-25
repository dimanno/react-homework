import {useEffect, useState} from "react";
import {editCar, getCars} from "../../Services/service.cars";

function EditCarForm() {
    let [cars, setCars] = useState([])
    let [formState, setFormState]=useState({model:'', price:'', year:''})
    let [checkCar, setCheckCar] = useState({})
    let [selectChangeModel, setSelectChangeModel] = useState('')
    let [selectChangePrice, setSelectChangePrice] = useState('')
    let [selectChangeYear, setSelectChangeYear] = useState('')

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
        setFormState({...formState, [e.target.name]: e.target.value})}

    function onSelectChangeModel(e) {
        setSelectChangeModel(selectChangeModel = formState.model)
    }
    function onSelectChangePrice(e) {
        setSelectChangePrice(selectChangePrice = formState.price)
    }
    function onSelectChangeYear(e) {
        setSelectChangeYear(selectChangeYear = formState.year)
    }

    let clickEditCar = (currentCar)=> {
        console.log(formState);
        editCar({id: currentCar.id, ...formState})
            .then((json) => {
                setCheckCar(json);
                console.log(json);
            });
    }


    return (
        <div className={'editCarBox'}>

            <label>Choose Car:
                <select name="cars" id="cars" form="carform" onChange={onSelectChangeModel}>
                    {cars.map(value => <option name={"model"} value={value.model} key={value.id}>Model:{value.model} </option>)}
                </select>
                <select name="cars" id="cars" form="carform" onChange={onSelectChangePrice}>
                    {cars.map(value => <option name={"price"} value={value.price} key={value.id}>Price:{value.price}</option>)}
                </select>
                <select name="cars" id="cars" form="carform" onChange={onSelectChangeYear}>
                    {cars.map(value => <option name={"year"} value={value.year} key={value.id}>Year:{value.year}</option>)}
                </select>

            </label>

            <form onSubmit={onsubmit} id='"carform"'>
                <label>Edit Car
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