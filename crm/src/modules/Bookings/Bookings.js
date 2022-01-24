import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Button } from 'antd';
import { useStores } from '../../useStores';
import withDragDropContext from './withDnDContext'
import Gantt from "js-booking-calendar";

const Bookings = observer((props) => {

    let store = useStores().BookingsStore;

    const properties = [
        {
            'name': 'Первый дом',
            'background_color': 'red',
            bookings: []
        },
        {
            'name': 'Второй дом',
            'background_color': 'blue',
            bookings: []
        },
        {
            'name': 'Третий дом',
            'background_color': 'yellow',
            'bookings': [
                {
                    id: '1',
                    start: '2021-12-01',
                    end: '2021-12-05',
                    name: 'Foo',
                    description: 'Description',
                },
                {
                    id: '2',
                    start: '2021-12-02',
                    end: '2021-12-03',
                    name: 'Bar',
                    description: 'Description',
                },
            ]
        },
        {
            'name': 'Четвертый дом',
            'background_color': 'purple',
            'bookings': [
                {
                    id: '3',
                    start: '2021-12-01',
                    end: '2021-12-05',
                    name: 'Foo',
                    description: 'Description',
                },
                {
                    id: '4',
                    start: '2021-12-02',
                    end: '2021-12-03',
                    name: 'Bar',
                    description: 'Description',
                },
            ]
        },
        {
            'name': 'Делюкс +',
            'background_color': 'magenta',
            'bookings': [
                {
                    id: '5',
                    start: '2022-01-01',
                    end: '2022-01-05',
                    name: 'Foo',
                    description: 'Description',
                },
                {
                    id: '6',
                    start: '2021-12-02',
                    end: '2021-12-03',
                    name: 'Bar',
                    description: 'Description',
                },
            ]
        }
    ];

    const options = {
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
        start_date: store.startDate,
        end_date: store.endDate,
        show_label: false,
        animations_active: false,
        init_scroll_position: null,
        custom_click_on_bar: function (task) {
            // only works if popup_trigger is not set to "click" 
            console.log('custom_click_on_bar', task)
        }
    };

    useEffect(async () => {
        await store.getBookings();
    }, [])

    return (
        <div>
            <Button onClick={store.prevMonth}>
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </Button>
            <Button onClick={store.nextMonth}>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </Button>
            <div className="card">
                <svg style={{ width: '1800px' }} id="gantt"></svg>
            </div>
        </div>
    );
});

export default withDragDropContext(Bookings);