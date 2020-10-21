import React from 'react'
import { Reservation } from '../Reservation/Reservation'
import './Reservations.css'
import PropTypes from 'prop-types'

export const  Reservations = (props) =>{

    const displayReservations = (reservations) =>  {
        return reservations.map((reservation, i ) => {
            return <Reservation key={i} reservation={reservation}/>
        })
    }

    // console.log(props.reservations)
    return (
        <div className='reservations-container'>
            {displayReservations(props.reservations)}
        </div>
    )
}

Reservations.propTypes = {
    reservations : PropTypes.array
}

/*
date: "12/29"
id: 1
name: "Christie"
number: 12
time: "7:00"
*/
