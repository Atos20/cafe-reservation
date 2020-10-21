const ApiCalls = {
    getAllReservations() {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
          };
          
          return fetch("http://localhost:3001/api/v1/reservations", requestOptions)
          .then(response => response.json())
          .then(promise => promise)
          .catch(error => console.log('error', error));
    }
}

export default ApiCalls