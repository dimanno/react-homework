
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
    fetch('http://192.168.1.253/api/v1/cars', {
        method: 'GET',
    })
        .then(value => value.json())
}
export {saveCar, getCars}