
const getCars = () => {
 return  fetch('http://91.201.233.14/api/v1/cars', {
      method: 'Get'
    })
     .then(value => value.json())
}


const saveCar = ({model, price, year}) => {
  return fetch('http://91.201.233.14/api/v1/cars', {
      method: 'POST',
      body: JSON.stringify({model, price, year}),
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
  }).then(value => value.json())
}

const editCar = ({id, model, price, year}) => {
  return fetch('http://91.201.233.14/api/v1/cars', {
      method: 'PATCH',
      body: JSON.stringify({id, model, price, year}),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
  }).then(value => value.json())
}

const deleteCarApi = (id) => {
    return  fetch('http://91.201.233.14/api/v1/cars'+ '/' + id, {
        method:'DELETE'
    })
}

export {getCars, saveCar, editCar, deleteCarApi}
