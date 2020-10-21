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
    },

    newREservations(newReservation){
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        // const raw = JSON.stringify({"name":"Orlando","date":"2020-12-20","time":"10:00","number":10});
        const reservation = JSON.stringify({newReservation);

        const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: reservation,
        redirect: 'follow'
        };

        return fetch("http://localhost:3001/api/v1/reservations", requestOptions)
        .then(response => response.json())
        .then(promise => promise)
        .catch(error => console.log('error', error));
    }
}

export default ApiCalls