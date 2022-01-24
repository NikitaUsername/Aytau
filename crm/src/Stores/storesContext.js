import React from 'react';
import MainStore from './MainStore'
import RequestsStore from './RequestsStore';
import BookingsStore from './BookingsStore';


export const storesContext = React.createContext({
    MainStore: new MainStore(),
    RequestsStore: new RequestsStore(),
    BookingsStore: new BookingsStore()
})