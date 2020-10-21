import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import userEvent from  '@testing-library/user-event';
import ApiCalls from '../ApiCalls/ApiCalls'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom';
jest.mock('../ApiCalls/ApiCalls');

describe('App', () => {

  beforeEach(() => {
    ApiCalls.getAllReservations.mockResolvedValue(
    [
      {
        date: '12/29',
        id: 1,
        name: 'Mock User',
        number: 12,
        time: '7:00',
      },
      {
        date: '4/5',
        id: 2,
        name: 'Mock User II',
        number: 2,
        time: '7:00',
      }
    ]
    )
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be abe to add a new reservation to the applications', async() => {
    render(
      <App />
    )

    expect(await waitFor( () => screen.getByText('Mock User'))).toBeInTheDocument(); 
    expect(await waitFor( () => screen.getByText('Mock User II'))).toBeInTheDocument(); 

    const nameInput = screen.getByPlaceholderText('guest name');
    const dateInput = screen.getByPlaceholderText('desired date');
    const timeInput = screen.getByPlaceholderText('desired time');
    const guestCountInput = screen.getByPlaceholderText('desired guest count');
    const makeReservationButton = screen.getByRole('button', { name: /make reservation/i })

    userEvent.type(nameInput, 'Mocked name');
    userEvent.type(dateInput, '2020-12-30');
    userEvent.type(timeInput, '10:00');
    userEvent.type(guestCountInput, '100');

    userEvent.click(makeReservationButton);

  
    const mockName = await waitFor( () => screen.getByText('Mocked name'));
    const mockDate = await waitFor( () => screen.getByText('2020-12-30'));
    const mockTime = await waitFor( () => screen.getByText('10:00'));
    const MockedGuestCount = await waitFor( () => screen.getByText('100'));
    
    expect(mockName).toBeInTheDocument();
    expect(mockDate).toBeInTheDocument();
    expect(mockTime).toBeInTheDocument();

    await waitFor (() => expect(MockedGuestCount).toBeInTheDocument())
  })
})
