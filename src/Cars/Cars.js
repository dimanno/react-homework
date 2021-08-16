import {useEffect, useState} from "react";
import {getCars} from "../Services/car.service";


export function Cars() {
    let [cars, setCars] = useState([])
    useEffect(()=>{

    })
    return (
        <div className="carsBox">
            {
                cars.map(value => console.log(value))
            }
        </div>
    );
}