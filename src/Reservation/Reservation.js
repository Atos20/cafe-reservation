import React from 'react'
import './Reservation.css'
import PropTypes from 'prop-types'

export const Reservation = (props) =>{
    console.log('reservation' ,props.reservation)
    const { date, id, name, number, time} = props.reservation

    return (
        <div id={id} className='reservation-container'>

          <div id={id} className="inner-container">
          
            <div className="data-container">

              <h1 className="title name-title">Guest Name</h1>
              <p className="data user-name">{name}</p>

            </div>

            <div className="data-container">

              <h1 className="title date">Date</h1>
              <p className="data user-date">{date}</p>

            </div>

            <div className="data-container">

              <h1 className="title name-title">Number of Guest</h1>
              <p className="data user-name">{number}</p>

            </div>


            <div className="data-container">

              <h1 className="title name-title">Time</h1>
              <p className="data user-name">{time}</p>

            </div>


            <button className='cancel-button'>cancel</button>
          </div>
        </div>
    )
}

Reservation.propTypes = {
    reservation : PropTypes.object
}

/*
date: "12/29"
id: 1
name: "Christie"
number: 12
time: "7:00"
*/
