import { makeAutoObservable, configure } from 'mobx';
// import { notification } from 'antd';
import React from 'react';

const moment = require('moment');

configure({
    enforceActions: "never",
})

class BookingStore {

    stage = 1;

    minDate = moment().add(1, 'days').toDate();
    startDate = moment().add(1, 'days'); //дата заезда
    endDate = moment().add(2, 'days');// дата выезда
    nights = 1; //ночей
    adults = 2; //взрослых
    children = 0; //детей
    room = undefined; //номер

    personInfo = {
        name: '',
        surname: '',
        fathersName: '',
        email: '',
        phone: '',
        comment: ''
    }

    childrenOptions = [0, 1];
    adultsOptions = [1, 2, 3];
    enableButton = true;

    rooms = [];

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
        let arr = [];
        for (let i = 0; i < 4; i++) {
            if ((i + value) <= 3)
                arr.push(i)
        }
        this.childrenOptions = arr;
    };

    changeChildren = (value) => {
        this.children = value;
        let arr = [];
        for (let i = 1; i < 4; i++) {
            if ((i + value) <= 3)
                arr.push(i)
        }
        this.adultsOptions = arr;
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

    findRooms = async () => {
        this.stage = 2;
        let response = await fetch('/api/booking/getRooms');
        this.rooms = await response.json();
    }

    chooseRoom = async (index) => {
        this.room = index;
        this.stage = 3;
    }

    goToStage = (stageNo) => {
        if (stageNo < this.stage)
            this.stage = stageNo
    }

    changeValue = (value, field) => {
        this.personInfo[field] = value;
    }

    sendBookingRequest = () => {
        console.log(this.personInfo)
    }
}

export default BookingStore;