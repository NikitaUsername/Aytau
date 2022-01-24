import React, { useEffect } from 'react';
import { Button, Row, Col, Spin } from 'antd';
import { observer } from 'mobx-react';
import { useStores } from '../../useStores';
import { useLocation } from "react-router-dom";
import Title from '../Title';


const BookingComplete = observer((props) => {

    let store = useStores().BookingCompleteStore;
    const { search } = useLocation();
    let id = new URLSearchParams(search).get('booking');

    useEffect(() => {
        store.checkBooking(id);
    }, [store])

    return (
        <div className="container-xxl">
            <Title mainTitle={'подтверждение бронирования'} />
            <Row className='row contentMain'>
                {!store.booking ?
                    <Spin />
                    :
                    <Col>
                        {
                            store.bookingComplete ?
                                <p>Ваше бронирование успешно подтверждено!</p>
                                :
                                <div>
                                    {store.booking.statusId === 3 ?
                                        <Button onClick={() => store.completeBooking(id)}>
                                            Подтвердить бронирование
                                        </Button> :
                                        <p>
                                            Страница не найдена
                                        </p>
                                    }
                                </div>
                        }
                    </Col>
                }
            </Row>
        </div >
    );
});

export default BookingComplete;