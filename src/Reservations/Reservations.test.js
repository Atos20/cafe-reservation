import React from 'react';
import { render, screen, waitFor } from '@testing-library/react'
import { Reservations} from './Reservations'
import ApiCalls from '../ApiCalls/ApiCalls'
jest.mock('../ApiCalls/ApiCalls.js');
import '@testing-library/jest-dom';

describe('ReservationForm', () =>{
    beforeEach(() => {

    })

    it('should be able to display all existing reservations on load', () => {
        render(
            <Reservatios />
        )
      
    })
})