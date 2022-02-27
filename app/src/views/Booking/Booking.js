import React, { Fragment } from 'react';
import { observer } from "mobx-react";
import { DatePicker, InputNumber, Row, Col, Select, Button, Input, Popover, Checkbox } from 'antd';
import { useStores } from '../../useStores';
import { DateRange } from 'react-date-range';
import Title from '../Title';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import '../../less/booking.less'
import * as locales from 'react-date-range/dist/locale';

const { TextArea } = Input;

const Booking = observer((props) => {

    const store = useStores().BookingStore;

    return (
        <div className="container-xxl booking">
            <Title mainTitle={'ЗАЯВКА НА АРЕНДУ'} />
            <Row className="row bookingMain contentMain">
                <Col span={6}>
                    <div className="bookingSelect">
                        <div className="bookingSelect__title">Ваша заявка</div>
                        <hr className="bookingSelect__divide" />
                        {store.stage < 3 &&
                            <Row
                                style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}
                                gutter={[16, 16]}
                            >
                                <Col span={14}>
                                    <p className='bookingSelectors__selectorTitle'>Дата заезда</p>
                                    <DatePicker
                                        allowClear={false}
                                        className='bookingSelectors__selector'
                                        value={store.startDate}
                                        onChange={e => store.changeStartDate(e)}
                                    />
                                </Col>

                                <Col span={8} >
                                    <p className='bookingSelectors__selectorTitle'>Ночь</p>
                                    <InputNumber
                                        className='bookingSelectors__selector'
                                        min={1}
                                        step={1}
                                        value={store.nights}
                                        onChange={store.changeNights}
                                    />
                                </Col>

                                <Col span={14} >
                                    <p className='bookingSelectors__selectorTitle'>Дата выезда</p>
                                    <DatePicker
                                        allowClear={false}
                                        value={store.endDate}
                                        onChange={e => store.changeEndDate(e)}
                                        className='bookingSelectors__selector'
                                    />

                                </Col>

                                <Col span={10} >
                                </Col>

                                <Col span={8} >
                                    <p className='bookingSelectors__selectorTitle'>Проживающие</p>
                                    <Select
                                        value={store.adults}
                                        className='bookingSelectors__selector'
                                        onChange={store.changeAdults}
                                    >
                                        {store.adultsOptions.filter(e => e !== 0).map(e =>
                                            <Select.Option key={`adlt-${e}`} value={e} >
                                                {`${e}`}
                                            </Select.Option >
                                        )}
                                    </Select>
                                </Col>
                                <Col span={16} >
                                    {/* <p className='bookingSelectors__selectorTitle'>Дети
                                        &nbsp;
                                        <Popover content={<div>Разрешено проживание детей <br /> только старше 14 лет!</div>}>
                                            <div style={{ display: 'inline-block' }}>
                                                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                            </div>
                                        </Popover>
                                    </p>
                                    <Select
                                        value={store.children}
                                        onChange={store.changeChildren}
                                        className='bookingSelectors__selector' >
                                        {store.childrenOptions.map(e =>
                                            <Select.Option key={`chldr-${e}`} value={e} >
                                                {`${e}`}
                                            </Select.Option >
                                        )}
                                    </Select> */}
                                </Col>
                                 <Col span={24} >
                                    <Checkbox>
                                        Необходимо дополнительное место &nbsp;
                                        <Popover content={<div>Предосталяется дополнительное место <br /> для 3го проживающего!</div>}>
                                            <div style={{ display: 'inline-block' }}>
                                                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                            </div>
                                        </Popover>
                                    </Checkbox>
                                </Col>
                                <Col span={8} >
                                    <Button disabled={!store.enableButton} className='bookingSelectors__findButton' onClick={store.findRooms} >
                                        Найти
                                    </Button>
                                </Col>
                            </Row>
                        }
                        {store.stage >= 3 &&
                            <Row>
                                <Col span={21}>
                                    <div className='bookingSelect__description'>
                                        <p className='bookingSelect__room'>
                                            {store.room.name}
                                        </p>
                                        <p className='bookingSelect__details'>
                                            <span>Взрослые: {store.adults} &ensp; Дети: {store.children}</span>
                                            <span className='bookingSelect__price'>
                                                {(+store.room.price * +store.nights).toLocaleString('ru-RU',
                                                    {
                                                        minimumFractionDigits: 2,
                                                        maximumFractionDigits: 2
                                                    })}
                                            </span>
                                        </p>
                                        <p className='bookingSelect__details'>
                                            <span>Дата заезда:</span>
                                            <span className='bookingSelect__price'>
                                             {store.startDate.format('DD.MM.YYYY')}
                                            </span>
                                        </p>
                                        <p className='bookingSelect__details'>
                                            <span>Дата выезда:</span>
                                            <span className='bookingSelect__price'>
                                             {store.endDate.format('DD.MM.YYYY')}
                                            </span>
                                        </p>
                                    </div>
                                </Col>
                                {store.transfer &&
                                    <Col span={21}>
                                        <div className='bookingSelect__description'>
                                            <p className='bookingSelect__room'>
                                                Доп. услуги:
                                            </p>
                                            <p className='bookingSelect__details'>
                                                <span>Трансфер из аэропорта</span>
                                                <span className='bookingSelect__price'>
                                                    3000,00
                                                </span>
                                            </p>
                                        </div>
                                    </Col>
                                }
                                <Col span={24}>
                                    <hr />
                                    <div className='bookingSelect__total'>
                                        <span className='bookingSelect__total__left'> Общий итог:</span>
                                        <span className='bookingSelect__total__right'>
                                            {(+store.room.price * +store.nights + (store.transfer ? 3000 : 0)).toLocaleString('ru-RU',
                                                {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                })}
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        }
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
                                    4. Подтверждение
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
                            store.rooms.map((room) => (
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
                                                    / &nbsp; Вид: &nbsp; <span className='roomBlock__info__values'>{room.view}</span>
                                                </p>
                                            </div>
                                            <p className='roomBlock__description'>
                                                ОПИСАНИЕ: {room.description.substr(0, 228)}...
                                            </p>
                                            <Row className='roomBlock__footer'>
                                                <Col span={12}>
                                                    <Button className='roomBlock__button' onClick={_ => store.chooseRoom(room)}>
                                                        Выбрать этот номер
                                                    </Button>
                                                </Col>
                                                <Col span={12}>
                                                    <div className='roomBlock__priceWrap'>
                                                        <p className='roomBlock__priceElement'>
                                                            <span className='roomBlock__price'>Цена от</span>
                                                            <span className='roomBlock__price__highlighted'>
                                                                {room.price.toLocaleString('ru-RU',
                                                                    {
                                                                        minimumFractionDigits: 2,
                                                                        maximumFractionDigits: 2
                                                                    })} / Ночь
                                                            </span>
                                                        </p>
                                                        <p className='roomBlock__showPrice'>* просмотр итоговой стоимости</p>
                                                    </div>
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
                                    <div className={'personInfo__title'} >Отчество</div>
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
                                <Col span="17">
                                    <Checkbox className={'personInfo__transfer'} value={store.transfer} onChange={store.setTransfer}>
                                        Необходим трансфер из аэропорта Горноалтайска
                                    </Checkbox>
                                </Col>
                                <Col span={17}>
                                    <div className={'personInfo__title'}>Дополнительный комментарий</div>
                                    <div className={'personInfo__input'}>
                                        <TextArea onChange={e => store.changeValue(e.target.value, 'comment')}
                                            rows={5}
                                            value={store.personInfo.comment}
                                        />
                                    </div>
                                </Col>
                                <Col span={17}>
                                    <div className="personInfo__alert" hidden={store.hideAlert}>
                                        Обязательные поля не заполнены, или заполнены не корректно!
                                    </div>
                                    <Button onClick={store.sendBookingRequest} className='personInfo__button'>
                                        Оставить заявку на бронь по E-mail
                                    </Button>
                                </Col>
                            </Row>
                        }
                        {store.stage === 4 &&
                            <Row className='success'>
                                <Col xl={17} lg={24} >
                                    <div className='successBox'>
                                        <h3 className='successBox__title'>Успешное резервирование!</h3>
                                        <p className='successBox__text'>Детали вашей заявки на аренду только что были отправлены на E-Mail.
                                            <br />
                                            (Внимание! Заявка на аренду не является гарантированной арендой).
                                            <br />
                                            Если у Вас есть вопросы, пожалуйста, не стесняйтесь обращаться к нам. Спасибо!
                                        </p>
                                        <Row className='successBox__contacts'>
                                            <Col span={8}>
                                                <p><i className="fa fa-phone" aria-hidden="true"></i> <a href="tel:+7-932-665-8994">+7-932-665-8994</a></p>
                                            </Col>
                                            <Col span={10}>
                                                <p><i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:info@aytau.ru">info@aytau.ru</a></p>
                                            </Col>
                                        </Row>
                                    </div>
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
