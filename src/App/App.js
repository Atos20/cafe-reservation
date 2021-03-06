import React, { Component } from 'react';
import './App.css';
import ApiCalls from '../ApiCalls/ApiCalls'
import { Reservations } from '../Reservations/Reservations'
import { ReservationForm } from '../ReservationForm/ReservationForm'
class App extends Component {
  constructor(){
    super()

    this.state = {
      error: '',
      reservations: []
    }
  }


  componentDidMount = async () => {
    try{
      const promiseReservations = await ApiCalls.getAllReservations()
      this.setState({reservations: promiseReservations })
    }
    catch(error) {
      this.setState({ error: `You've got a ${error.status} Error` })
    }
  }

  makeNewReservation = (newReservation) => {
    this.setState( {reservations : [...this.state.reservations,  newReservation] } )
  }

  //started to write the method to Post a new reservation to the API
  // postNewReservation = async(reservation) => {
  //   try{
  //     const promiseNewReservations = await ApiCalls.newReservations()
  //     const promiseReservations = await ApiCalls.getAllReservations()
  //     this.setState({reservations: promiseReservations })
  //     console.log(promiseReservations)
  //   }
  //   catch(error) {
  //     this.setState({ error: `You've got a ${error.status} Error` })
  //   }
  // }
  
  render() {
    const { reservations }= this.state
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>

        <div className='resy-form'>
        <ReservationForm 
          makeNewReservation={this.makeNewReservation} 
        />
        </div>  

        <Reservations 
          reservations={reservations}
        />
      </div>
    )
  }
}

export default App;
