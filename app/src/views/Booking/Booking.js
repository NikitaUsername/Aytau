import React, { Fragment } from 'react';
import { observer } from "mobx-react";
import { DatePicker, InputNumber, Row, Col, Select, Button, Input } from 'antd';
import { useStores } from '../../useStores';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import '../../less/booking.less'
import * as locales from 'react-date-range/dist/locale';

const { TextArea } = Input;

const Booking = observer((props) => {

    const store = useStores().BookingStore;

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
                                <InputNumber
                                    className='bookingSelect__selector'
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
                                    {store.adultsOptions.filter(e => e !== 0).map(e =>
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
                                    {store.childrenOptions.map(e =>
                                        <Select.Option key={`chldr-${e}`} value={e} >
                                            {`${e}`}
                                        </Select.Option >
                                    )}
                                </Select>
                            </Col>
                            <Col span={8} >

                            </Col>

                            <Col span={8} >
                                <Button disabled={!store.enableButton} className='bookingSelect__findButton' onClick={store.findRooms} >
                                    Найти
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col span={18}>
                    <div className="bookingStages">
                        <div className="bookingContainer">
                            <div onClick={_ => store.goToStage(1)} className='bookingStages__stage'>
                                <span className={store.stage === 1 ? 'bookingStages__stage__currentStage' : ''}>
                                    1. Выберите дату в календаре
                                </span>
                                <i></i>
                            </div>
                            <div onClick={_ => store.goToStage(2)} className='bookingStages__stage'>
                                <span className={store.stage === 2 ? 'bookingStages__stage__currentStage' : ''}>
                                    2. Выберите гостевой дом
                                </span>
                            </div>
                            <div onClick={_ => store.goToStage(3)} className='bookingStages__stage'>
                                <span className={store.stage === 3 ? 'bookingStages__stage__currentStage' : ''}>
                                    3. Сделайте заказ
                                </span>
                            </div>
                            <div className='bookingStages__stage'>
                                <span className={store.stage === 4 ? 'bookingStages__stage__currentStage' : ''}>
                                    4. Подтверждение заказа
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        {store.stage === 1 &&
                            <DateRange
                                minDate={store.minDate}
                                className="bookingCalendar"
                                months={2}
                                direction="horizontal"
                                onChange={e => store.changeRange(e.selection)}
                                locale={locales.ru}
                                ranges={store.range}
                            />
                        }
                        {store.stage === 2 &&
                            store.rooms.map((room, index) => (
                                <Fragment key={room.id}>
                                    <Row className='roomBlock'>
                                        <Col span={8}>
                                            <img style={{ width: '240px' }} src={room.image} />
                                        </Col>
                                        <Col span={16}>
                                            <a className='roomBlock__text'>{room.name.toUpperCase()}</a>
                                            <div className='roomBlock__info'>
                                                <p>
                                                    Макс. кол-во человек: &nbsp; <span className='roomBlock__info__values'>{room.places_qty} </span>
                                                    / &nbsp; Завтрак включён: &nbsp; <span className='roomBlock__info__values'>Да </span>
                                                    / &nbsp; Вид: &nbsp; <span className='roomBlock__info__values'>{room.view}</span>
                                                </p>
                                            </div>
                                            <p className='roomBlock__description'>
                                                ОПИСАНИЕ: {room.description.substr(0, 228)}...
                                            </p>
                                            <Row className='roomBlock__footer'>
                                                <Col span={12}>
                                                    <Button className='roomBlock__button' onClick={_ => store.chooseRoom(index)}>
                                                        Выбрать этот номер
                                                    </Button>
                                                </Col>
                                                <Col span={12}>
                                                    <p className='roomBlock__priceWrap'>
                                                        <p className='roomBlock__priceElement'>
                                                            <span className='roomBlock__price'>Цена от</span>
                                                            <span className='roomBlock__price__highlighted'>{room.price},00 / Ночь</span>
                                                        </p>
                                                        <p className='roomBlock__showPrice'>* просмотр итоговой стоимости</p>
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Fragment>
                            ))
                        }
                        {store.stage === 3 &&
                            <Row className={'personInfo'}>
                                <Col span={8}>
                                    <div className={'personInfo__title'} >Имя *</div>
                                    <div className={'personInfo__input'}>
                                        <Input value={store.personInfo.name}
                                            onChange={e => store.changeValue(e.target.value, 'name')} />
                                    </div>
                                </Col>
                                <Col offset={1} span={8}>
                                    <div className={'personInfo__title'}>Фамилия *</div>
                                    <div className={'personInfo__input'}>
                                        <Input value={store.personInfo.surname}
                                            onChange={e => store.changeValue(e.target.value, 'surname')} />
                                    </div>
                                </Col>
                                <Col span={7}>
                                </Col>

                                <Col span={8}>
                                    <div className={'personInfo__title'} >Отчество *</div>
                                    <div className={'personInfo__input'}>
                                        <Input value={store.personInfo.fathersName}
                                            onChange={e => store.changeValue(e.target.value, 'fathersName')} />
                                    </div>
                                </Col>

                                <Col span={16}>
                                </Col>

                                <Col span={8}>
                                    <div className={'personInfo__title'} >Email *</div>
                                    <div className={'personInfo__input'}>
                                        <Input value={store.personInfo.email}
                                            onChange={e => store.changeValue(e.target.value, 'email')} />
                                    </div>
                                </Col>

                                <Col offset={1} span={8}>
                                    <div className={'personInfo__title'} >Телефон *</div>
                                    <div className={'personInfo__input'}>
                                        <Input
                                            value={store.personInfo.phone}
                                            onChange={e => store.changeValue(e.target.value, 'phone')} />
                                    </div>
                                </Col>

                                <Col span={17}>
                                    <div className={'personInfo__title'} >Дополнительный комментарий</div>
                                    <div className={'personInfo__input'}>
                                        <TextArea onChange={e => store.changeValue(e.target.value, 'comment')}
                                            rows={5}
                                            value={store.personInfo.comment}
                                        />
                                    </div>
                                </Col>
                                <Col span={17}>
                                    <Button onClick={store.sendBookingRequest} className='personInfo__button'>
                                        Оставить заявку на бронь по E-mail
                                    </Button>
                                </Col>
                            </Row>
                        }
                    </div>
                </Col>
            </Row>

        </div >
    )
});

export default Booking;
