import React from 'react'
import './Reservation.css'

export const Reservation = () =>{
    return (
        <div id='' className='reservation-container'>

          <div id='' className="inner-container">
          
            <div className="data-container">

              <h1 className="title name-title">Guest Name</h1>
              <p className="data user-name">Christie</p>

            </div>

            <div className="data-container">

              <h1 className="title date">Date</h1>
              <p className="data user-date">12/29</p>

            </div>

            <div className="data-container">

              <h1 className="title name-title">Number of Gust</h1>
              <p className="data user-name">12</p>

            </div>


            <div className="data-container">

              <h1 className="title name-title">Time</h1>
              <p className="data user-name">7:00</p>

            </div>


            <button className='cancel-button'>cancel</button>
          </div>
        </div>
    )
}

/*
date: "12/29"
id: 1
name: "Christie"
number: 12
time: "7:00"
*/
