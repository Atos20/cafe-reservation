import React from 'react';
import { render, screen, waitFor } from '@testing-library/react'
import { Reservations } from './Reservations'
import ApiCalls from '../ApiCalls/ApiCalls'
jest.mock('../ApiCalls/ApiCalls');
import '@testing-library/jest-dom';

describe('ReservationForm', () =>{
    let reservations;
    beforeEach(() => {

        ApiCalls.getAllReservations.mockResolvedValueOnce({
            date: "12/29",
            id: 1,
            name: "Mock User",
            number: 12,
            time: "7:00",
       })
    })

    reservations = [{
        date: "12/29",
        id: 1,
        name: "Mock User",
        number: 12,
        time: "7:00",
    }]

    it('should be able to display an existing card', async() => {
        render(
            <Reservations reservations={reservations}/>
        )

        const guestTitle = screen.getByText('Guest Name');
        const dateTitle = screen.getByText('Date');
        const timeTitle = screen.getByText('Number of Guest');
        const guestCountTitle = screen.getByText('Time');
        const cancelReservationButton = screen.getByRole('button', { name: /cancel/i });

        const guestName = screen.getByText('Mock User'); 
        const guestDate = screen.getByText('12/29'); 
        const guestNumberOfGuest = screen.getByText('12'); 
        const guestTime = screen.getByText('7:00'); 
        //card info
        expect(guestTitle).toBeInTheDocument();
        expect(dateTitle).toBeInTheDocument();
        expect(timeTitle).toBeInTheDocument();
        expect(guestCountTitle).toBeInTheDocument();
        expect(cancelReservationButton).toBeInTheDocument();
        //users info
        expect(guestName).toBeInTheDocument();
        expect(guestDate).toBeInTheDocument();
        expect(guestNumberOfGuest).toBeInTheDocument();
        expect(guestTime).toBeInTheDocument();
      
    })
  })
   