import React, { Component } from 'react';
import './App.css';
import ApiCalls from '../ApiCalls/ApiCalls'

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
      console.log(promiseReservations)
    }
    catch(error) {
      this.setState({ error: `You've got a ${error.status} Error` })
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
