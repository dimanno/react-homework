import {useEffect, useState} from "react";
import {deleteCarApi, getCars} from "../../Services/service.cars";
import {Car} from "../Car/Car";

function Cars(checkCar) {
    let [cars, setCars] = useState([])
    useEffect( ()=>{
        async function fetchData() {
            let carsList = await getCars()
            setCars([...carsList.reverse()])
        }
        fetchData();
    },[checkCar])

    let deleteCar = (id) => {
        deleteCarApi(id).then(value => console.log(value))
        let filterArray = cars.filter(value => value.id !== id)
        setCars([...filterArray])
    }

    return(
        <div className={'carsBox'}>
            {
              cars &&  cars.map(value => <Car item={value} key={value.id} deleteCar={deleteCar}/>)
            }
        </div>
    )
}
export {Cars}