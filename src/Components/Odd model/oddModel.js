import {useEffect, useState} from "react";
import {getCars} from "../../service/service";
import {Car} from "../Car/Car";

export function OddModel() {
    let [cars, setCars] = useState([])
    let filterOdd = cars.filter(value => value.model.length %2 !== 0)
    useEffect(()=>{
        getCars().then(({data})=> setCars([...data]))
    },[])

    return(
        <div>
            {
                filterOdd.map(value => <Car item={value} key={value.id}/>)
            }
        </div>
    )
}