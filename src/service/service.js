import axios from "axios"

let config = {
    baseURL:'http://195.72.146.25/api/v1/cars'
}

let axiosInstance =axios.create(config);
    const getCars =()=>{
        return axiosInstance('')
    }

    export {getCars}