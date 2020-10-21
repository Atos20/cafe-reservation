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

    return (
        <div className='reservations-container'>
            {displayReservations(props.reservations)}
        </div>
    )
}

Reservations.propTypes = {
    reservations : PropTypes.array
}
