import React from 'react';
import BookingCompleteStore from './BookingCompleteStore';
import BookingStore from './BookingStore'

export const storesContext = React.createContext({
    BookingStore: new BookingStore(),
    BookingCompleteStore: new BookingCompleteStore()
})