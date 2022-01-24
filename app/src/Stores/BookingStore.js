import { makeAutoObservable, configure } from 'mobx';
// import { notification } from 'antd';
import axios from 'axios';

const moment = require('moment');

// configure({
//     enforceActions: "never",
// })

class BookingStore {

    stage = 1;

    minDate = moment().startOf('day').add(1, 'days').toDate();
    startDate = moment().startOf('day').add(1, 'days'); //дата заезда
    endDate = moment().startOf('day').add(2, 'days');// дата выезда
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
    };
    transfer = false;

    childrenOptions = [0, 1];
    adultsOptions = [1, 2, 3];
    enableButton = true;
    hideAlert = true;

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

        this.startDate = value.startOf('day').utc(true);
        this.endDate = moment(this.startDate).add(days, 'days');
        this.nights = days;

        this.updateRange();
    };

    changeEndDate = (value) => {
        if (value <= this.startDate) {
            value = moment(this.startDate).add(1, 'days');
        }
        this.endDate = value.startOf('day').utc(true);

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

        this.startDate = moment(value.startDate).utc(true);
        this.endDate = moment(value.endDate).utc(true);
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
        let response = await axios.post('/api/booking/getRooms',
            { start: this.startDate, end: this.endDate });
        this.rooms = await response.data;
    }

    chooseRoom = async (room) => {
        this.room = room;
        this.stage = 3;
    }

    goToStage = (stageNo) => {
        if ((stageNo < this.stage) && this.stage !== 4) {
            this.stage = stageNo

            if (stageNo === 1) {
                this.room = undefined;
                this.rooms = [];
            };
        }
    }

    changeValue = (value, field) => {
        this.personInfo[field] = value;
    }

    setTransfer = (e) => {
        this.transfer = e.target.checked;
    }

    checkFields = () => {
        if (this.personInfo.name.replace(/\s/g, '').length === 0 ||
            this.personInfo.surname.replace(/\s/g, '').length === 0 ||
            (this.personInfo.phone.replace(/\s/g, '').length < 5 ||
                this.personInfo.phone.replace(/\s/g, '').length > 12) ||
            this.personInfo.email.match(/.+@.+\..+/) === null
        )
            return false;

        return true;
    }

    sendBookingRequest = async () => {
        let check = await this.checkFields();
        if (!check)
            this.hideAlert = false;
        else {
            let totalAmount = +this.room.price * +this.nights;
            totalAmount += this.transfer ? 3000 : 0;
            let data = {
                startDate: this.startDate,
                endDate: this.endDate,
                adults: this.adults,
                children: this.children,
                room: this.room.id,
                name: this.personInfo.name,
                surname: this.personInfo.surname,
                fathersName: this.personInfo.fathersName,
                email: this.personInfo.email,
                phone: this.personInfo.phone,
                comment: this.personInfo.comment,
                transfer: this.transfer,
                totalAmount: totalAmount
            }
            let response = await axios.post('/api/booking/saveRequest', data);
            if (response.data?.success) {
                this.stage = 4;
            }
        }
    }
}

export default BookingStore;