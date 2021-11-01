import React from 'react';
import BookingStore from './BookingStore'

export const storesContext = React.createContext({
    BookingStore: new BookingStore()
})