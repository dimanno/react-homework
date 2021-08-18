import {useEffect, useState} from "react";
import {getCars} from "../Services/car.service";
import {Car} from "../Car/Car";
import './Cars.css'
import {EditForm} from "../edit-form/edit.form";

export function Cars() {
    let [editCar, setEditCar] = useState(false)
    let [cars, setCars] = useState([]);
    let [myId, setMyId] = useState([]);
    useEffect(()=>{
           getCars().then(value => setCars([...value]))
    },[cars]);

    const chosen =(id) => setMyId(id)


    return (
        <div className={'wrap'}>
        <div className="carsBox">
            {
                cars.map(value => <Car item={value} key={value.id} chosen={chosen} editCar={editCar} setEditCar={setEditCar}/>)
            }
        </div>
            {editCar && <EditForm id={myId}/>}
        </div>
    );
}