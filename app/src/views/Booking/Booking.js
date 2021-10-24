import React from 'react';
import { observer } from "mobx-react";
import { DatePicker, InputNumber, Row, Col, Select, Button } from 'antd';
import { BookingStoreContext } from '../../Stores/BookingStore';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import '../../less/booking.less'
import * as locales from 'react-date-range/dist/locale';



const Booking = observer((props) => {

    const store = React.useContext(BookingStoreContext);


    return (
        <div className="container booking">
            <div className="row bookingTitle">
                <div className="col-lg-12 ms-auto bookingTitle__title">
                    <h1 className='bookingTitle__text mx-auto' >
                        БРОНИРОВАНИЕ
                    </h1>
                </div>
            </div>
            <Row className="row bookingMain">
                <Col span={6}>
                    <div className="bookingSelect">
                        <div className="bookingSelect__title">Ваше бронирование</div>
                        <hr className="bookingSelect__divide" />
                        <Row
                            style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}
                            gutter={[16, 16]}
                        >
                            <Col span={14}>
                                <p className='bookingSelect__selectorTitle' style={{ marginBottom: '5px' }}>Дата заезда</p>
                                <DatePicker
                                    allowClear={false}
                                    className='bookingSelect__dateSelect'
                                    value={store.startDate}
                                    onChange={e => store.changeStartDate(e)}
                                />
                            </Col>

                            <Col span={8} >
                                <p className='bookingSelect__selectorTitle' style={{ marginBottom: '5px' }}>Ночь</p>
                                {/* <Select className='bookingSelect__nights' /> */}
                                <InputNumber
                                    min={1}
                                    step={1}
                                    value={store.nights}
                                    onChange={store.changeNights}
                                />
                            </Col>

                            <Col span={14} >
                                <p className='bookingSelect__selectorTitle' style={{ marginBottom: '5px' }}>Дата выезда</p>
                                <DatePicker
                                    allowClear={false}
                                    value={store.endDate}
                                    onChange={e => store.changeEndDate(e)}
                                    className='bookingSelect__dateSelect'
                                />

                            </Col>

                            <Col span={10} >
                            </Col>

                            <Col span={8} >
                                <p className='bookingSelect__selectorTitle' style={{ marginBottom: '5px' }}>Взрослые</p>
                                <Select
                                    value={store.adults}
                                    className='bookingSelect__nights'
                                    onChange={store.changeAdults}
                                >
                                    {store.options.filter(e => e !== 0).map(e =>
                                        <Select.Option key={`adlt-${e}`} value={e} >
                                            {`${e}`}
                                        </Select.Option >
                                    )}
                                </Select>
                            </Col>
                            <Col span={8} >
                                <p className='bookingSelect__selectorTitle' style={{ marginBottom: '5px' }}>Дети</p>
                                <Select
                                    value={store.children}
                                    onChange={store.changeChildren}
                                    className='bookingSelect__nights' >
                                    {store.options.map(e =>
                                        <Select.Option key={`adlt-${e}`} value={e} >
                                            {`${e}`}
                                        </Select.Option >
                                    )}
                                </Select>
                            </Col>
                            <Col span={8} >

                            </Col>

                            <Col span={8} >
                                <Button disabled={!store.enableButton} className='bookingSelect__findButton' >
                                    Найти
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col span={18}>
                    <div className="bookingStages">
                        <div className="bookingContainer">
                            <div className='bookingStages__stage'>
                                <span>
                                    1. Выберите дату в календаре
                                </span>
                                <i></i>
                            </div>
                            <div className='bookingStages__stage'>
                                <span>
                                    2. Выберите гостевой дом
                                </span>
                            </div>
                            <div className='bookingStages__stage'>
                                <span>
                                    3. Сделайте заказ
                                </span>
                            </div>
                            <div className='bookingStages__stage'>
                                <span>
                                    4. Подтверждение заказ
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <Calendar
                        disablePrevDates
                        rightArrowCss="background: #c1c1c1;"
                        leftArrowCss="background: #c1c1c1;"
                        thCss="background:#353535;"
                        globalCss="tr{background:#353535}"
                        calendar-left-body="background:#353535"
                        card="background:#353535"
                    /> */}
                    <DateRange
                        minDate={store.minDate}
                        className="bookingCalendar"
                        months={2}
                        direction="horizontal"
                        onChange={e => store.changeRange(e.selection)}
                        locale={locales.ru}
                        ranges={store.range}
                    />
                </Col>
            </Row>

        </div>
    )
});

export default Booking;
