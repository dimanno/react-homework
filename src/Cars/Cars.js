import {useEffect, useState} from "react";
import {getCars} from "../Services/car.service";


export function Cars() {
    let [cars, setCars] = useState([])
    useEffect(()=>{
           getCars()
    },[])
    return (
        <div className="casBox">
            {
                cars.map(value => console.log(value))
            }
        </div>
    );
}