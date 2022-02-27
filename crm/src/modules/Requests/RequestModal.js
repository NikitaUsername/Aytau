import React, { Fragment } from 'react';
import { Modal, Row, Col, Input, Button } from 'antd';
import { useStores } from '../../useStores';
import { observer } from 'mobx-react-lite';
import moment from 'moment';

const RequestModal = observer(() => {
    const store = useStores().RequestsStore;
    const request = store.currentRequest;
    return (
        <div>
            <Modal
                footer={
                    <Fragment>
                        {!store.isRequestEdit ?
                            <Button onClick={store.editRequest}>
                                Редактировать
                            </Button>
                            :
                            <Button onClick={store.saveRequest}>
                                Сохранить
                            </Button>
                        }
                    </Fragment>
                }
                visible={store.isModalRequestOpen}
                onCancel={store.closeRequestModal}
            >
                <Row>
                    <Col span={12}> Фамилия </Col>
                    <Col span={12}>
                        {request.surname}
                    </Col>

                    <Col span={12}> Имя </Col>
                    <Col span={12}> {request.name} </Col>

                    <Col span={12}> Отчество </Col>
                    <Col span={12}> {request.fathersName} </Col>

                    <Col span={12}> Город </Col>
                    <Col span={12}> {request.city} </Col>

                    <Col span={12}> Даты </Col>
                    <Col span={12}> {`${request.startDate} - ${request.endDate}`} </Col>

                    <Col span={12}> Количество дней</Col>
                    <Col span={12}> {moment(request.endDate).diff(moment(request.startDate), 'days')} </Col>

                    <Col span={12}> Дом </Col>
                    <Col span={12}> {request['room.name']} </Col>

                    <Col span={12}> Сумма </Col>
                    <Col span={12}> {request.totalAmount?.toFixed(2)} </Col>
                    <Col className='requestComment' span={24}>
                        {store.isRequestEdit ?
                            <Input.TextArea value={request.adminComment} placeholder='Комментарий' rows={4} />
                            :
                            <p> {request.adminComment}</p>
                        }
                    </Col>
                </Row>
            </Modal>
        </div >
    );
});

export default RequestModal;