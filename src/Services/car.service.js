
const saveCar = ({model, price, year}) => {
  fetch('http://195.72.146.25/api/v1/cars', {
      method:'POST',
      body: JSON.stringify({model, price, year}),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  })
      .then((response) => response.json())
      .then((json) => console.log(json));
}

const getCars = () => {
   return  fetch('http://195.72.146.25/api/v1/cars', {
        method:'GET'
    })
        .then(value => value.json())
}

const deleteCar = (id) => {
     fetch('http://195.72.146.25/api/v1/cars'+ '/' + id, {
        method:'DELETE'
    })
}

const editCar = ({id, model, price, year}) => {
    // console.log(id);
    fetch('http://195.72.146.25/api/v1/cars/'+ id, {
        method: 'PATCH',
        body: JSON.stringify({model, price, year}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
  
}
export {saveCar, getCars, deleteCar, editCar}