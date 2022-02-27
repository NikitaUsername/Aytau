import React from 'react';
import MainStore from './MainStore'
import RequestsStore from './RequestsStore';
import BookingsStore from './BookingsStore';

const mainStore = new MainStore();

export const storesContext = React.createContext({
    MainStore: mainStore,
    RequestsStore: new RequestsStore(mainStore),
    BookingsStore: new BookingsStore()
})