import React, { Component } from 'react'
import moment from 'moment' 
import PropTypes from 'prop-types'

export class ReservationForm extends Component {
    constructor(){
        super()

        this.state= {
            name: '',
            date: moment().format('YYYY-MM-DD'),
            time: '',
            number: '',
            id: Date.now()
        }
    }

    updateValues = (event) => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
    }

    newReservation = (event) => {
        event.preventDefault();
        this.props.makeNewReservation(this.state)
        this.clearInputs()
    }


    clearInputs = () => {
        this.setState({
            name: '',
            date: moment().format('YYYY-MM-DD'),
            time: '',
            number: ''
        });
    }

//     date: "12/29"
// id: 1
// name: "Christie"
// number: 12
// time: "7:00"
    
    render() {
        console.log(this.state)

        return (
          <form className='reservation-form'>
            <label htmlFor='name'>
            <input 
              placeholder='guest name'
              value={this.state.name}
              onChange={this.updateValues}
              name='name'
              type='text'
              className='input input-name'/>
            </label>
            <label htmlFor='date'>
            <input 
              placeholder='desired date'
              value={this.state.date}
              onChange={this.updateValues}
              min={this.state.date}
              name='date'
              type='date'
              className='input input-date'/>
            </label>
            <label htmlFor='time'>
            <input 
             placeholder='desired time'
              value={this.state.time}
              onChange={this.updateValues}
              name='time'
              type='time'
              className='input input-time'/>
            </label>
            <label htmlFor='number-guest'>
            <input 
              placeholder='desired guest count'
              value={this.state.numberGuest}
              onChange={this.updateValues}
              name='number'
              type='number'
              className='input input-number-guest'/>
            </label>
            <button
            
              onClick={this.newReservation}>
              Make reservation
            </button>
          </form>
        )
    }
}

ReservationForm.propTypes = {
    makeNewReservation: PropTypes.func
}