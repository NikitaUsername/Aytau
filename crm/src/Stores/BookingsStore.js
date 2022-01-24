import { makeAutoObservable } from 'mobx';
import Gantt from "js-booking-calendar";
import $api from '../axios';

class BookingsStore {

    date = new Date();
    startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 5);

    gantt = undefined;
    properties = undefined;

    options = {
        on_click: function (task) {
            console.log(task);
        },
        on_date_change: function (task, start, end, lastScrollXPosition) {
            console.log(task);
        },
        on_progress_change: function (task, progress) {
            console.log(task, progress);
        },
        on_view_change: function (mode) {
            console.log(mode);
        },
        on_date_added: function (start, end, property, propertyIdx, xPosition, yPosition) {
            // executed with double click on column
            console.log('start', start);
            console.log('end', end);
            console.log('property', property);
            console.log('propertyIdx', propertyIdx);
            console.log('xPosition', xPosition);
            console.log('yPosition', yPosition);
        },

        header_height: 40,
        column_width: 40,
        step: 20,
        popup_trigger: 'none',
        bar_height: 40,
        bar_corner_radius: 2,
        arrow_curve: 0,
        padding: 18,
        view_mode: 'Day',
        date_format: 'YYYY-MM-DD',
        start_date: this.startDate,
        end_date: this.endDate,
        show_label: false,
        animations_active: false,
        init_scroll_position: null,
        custom_click_on_bar: function (task) {
            // only works if popup_trigger is not set to "click" 
            console.log('custom_click_on_bar', task)
        }
    };

    constructor() {
        makeAutoObservable(this, {}, { deep: true });
    }

    prevMonth = () => {
        let start =  this.options.start_date;
        let end = this.options.end_date;
        this.options.start_date = new Date(start.getFullYear(), start.getMonth(), 0);
        this.options.end_date = new Date(end.getFullYear(), end.getMonth() - 1, 5);
        this.createCalendar();
    }

    nextMonth = () => {
        let start =  this.options.start_date;
        let end = this.options.end_date;
        this.options.start_date = new Date(start.getFullYear(), start.getMonth() + 2, 0);
        this.options.end_date = new Date(end.getFullYear(), end.getMonth() + 1, 5);
        this.createCalendar();
    }

    getBookings = async () => {
        let data = await $api.get('/api/booking/getBookings');
        this.properties = data.data.data;
        this.createCalendar();
    }

    createCalendar = () => {
        new Gantt("#gantt", this.properties, this.options);
    }

}

export default BookingsStore;