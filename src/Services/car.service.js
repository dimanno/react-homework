const saveCar = ({model, price, year}) => {
  fetch('http://192.168.1.253/api/v1/cars', {
      method:'POST',
      body: JSON.stringify({model, price, year}),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export {saveCar}