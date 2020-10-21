import React from 'react';
import { render, screen } from '@testing-library/react';
import { ReservationForm } from './ReservationForm'
import '@testing-library/jest-dom';

describe('ReservationForm', () =>{
    beforeEach(() => {

    })

    it('should be able to display the reservation form on the document', () => {
        render(
            <ReservationForm />
        )
        const nameInput = screen.getByPlaceholderText('guest name');
        const dateInput = screen.getByPlaceholderText('desired date');
        const timeInput = screen.getByPlaceholderText('desired time');
        const guestCountInput = screen.getByPlaceholderText('desired guest count');
        const makeReservationButton = screen.getByRole('button', { name: /make reservation/i });

        expect(nameInput).toBeInTheDocument();
        expect(dateInput).toBeInTheDocument();
        expect(timeInput).toBeInTheDocument();
        expect(guestCountInput).toBeInTheDocument();
        expect(makeReservationButton).toBeInTheDocument();
    })
})