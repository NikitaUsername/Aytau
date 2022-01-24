import { makeAutoObservable } from 'mobx';
import axios from 'axios';


class BookingCompleteStore {

    booking = undefined;
    bookingComplete = false;

    constructor() {
        makeAutoObservable(this);
    }

    checkBooking = async (cipherId) => {
        let body = {
            cipherId: cipherId
        };
        let response = await axios.post('/api/booking/check', body);
        console.log(response.data.data)
        this.booking = response.data.data;
    }

    completeBooking = async (cipherId) => {
        let body = {
            statusId: 2,
            cipherId: cipherId
        }
        let response  = await axios.post('/api/booking/complete', body);
        if(response.data.success)
            this.bookingComplete = true;
    }

}

export default BookingCompleteStore;