import { makeAutoObservable, configure } from 'mobx';
// import { notification } from 'antd';
import React from 'react';

const moment = require('moment');

configure({
    enforceActions: "never",
})

class BookingStore {

    minDate = moment().add(1, 'days').toDate();
    startDate = moment().add(1, 'days');
    endDate = moment().add(2, 'days');
    nights = 1;
    adults = 2;
    children = 0;
    options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    enableButton = true;

    range = [{
        startDate: this.startDate.toDate(),
        endDate: this.endDate.toDate(),
        key: 'selection'
    }];

    constructor() {
        makeAutoObservable(this);
    }

    changeStartDate = (value) => {
        let days = this.endDate.diff(this.startDate, 'days');
        let tommorow = moment().add(1, 'days');;

        if (value < tommorow) {
            value = tommorow;
        }

        this.startDate = value;
        this.endDate = moment(value).add(days, 'days');
        this.nights = days;

        this.updateRange();
    };

    changeEndDate = (value) => {
        if (value <= this.startDate) {
            value = moment(this.startDate).add(1, 'days');
        }
        this.endDate = value;

        let days = value.diff(this.startDate, 'days');
        this.nights = days;

        this.updateRange();
    };

    updateRange = () => {
        let range = {
            startDate: this.startDate.toDate(),
            endDate: this.endDate.toDate(),
            key: 'selection'
        };
        this.range = [range];
    };

    changeRange = (value) => {
        this.range = [value];

        this.startDate = moment(value.startDate);
        this.endDate = moment(value.endDate);
        this.nights = moment(value.endDate).diff(moment(value.startDate), 'days');
        this.checkEnableButton();
    };

    changeAdults = (value) => {
        this.adults = value;
    };

    changeChildren = (value) => {
        this.children = value;
    };

    changeNights = (value) => {
        this.nights = Math.round(value);
        this.endDate = moment(this.startDate).add(this.nights, 'days');
        this.updateRange();
    };

    checkEnableButton = () => {
        if (this.nights > 0)
            this.enableButton = true;
        else
            this.enableButton = false;
    }
}

export const BookingStoreContext = React.createContext(new BookingStore());