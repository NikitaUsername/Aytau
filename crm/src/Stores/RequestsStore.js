import { makeAutoObservable } from 'mobx';
import { Button, notification } from 'antd';
import $api from '../axios';


class RequestsStore {

    loaded = false;
    columns = [
        // {
        //     title: '№',
        //     dataIndex: 'id'
        // },
        //
        // {
        //     title: 'Взрослых',
        //     dataIndex: 'adults'
        // },
        // {
        //     title: 'Детей',
        //     dataIndex: 'children'
        // },

        {
            title: 'Имя',
            dataIndex: 'name'
        },
        {
            title: 'Фамилия',
            dataIndex: 'surname'
        },
        {
            title: 'Телефон',
            dataIndex: 'phone'
        },
        {
            title: 'Статус',
            dataIndex: 'booking_status.name'
        },
        {
            title: 'Дом',
            dataIndex: 'room.name'
        },
        {
            title: 'Дата заезда',
            dataIndex: 'startDate'
        },
        {
            title: 'Дата выезда',
            dataIndex: 'endDate'
        },
        // {
        //     title: 'Отчество',
        //     dataIndex: 'fathersName'
        // },
        // {
        //     title: 'email',
        //     dataIndex: 'email'
        // },

        // {
        //     title: 'Комментарий',
        //     dataIndex: 'comment'
        // },

        {
            title: 'Действия',
            dataIndex: 'actions',
            width: '10%',
            render: (value, row) => {
                switch (row['booking_status.id']) {
                    case 1:
                        return (
                            <div>
                                <Button onClick={() => this.changeStatus(row.id, 3, row.email)}
                                    style={{ marginRight: '5px' }}
                                    type="primary">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                </Button>
                                <Button onClick={() => this.changeStatus(row.id, 4)}
                                    type="danger" >
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                </Button>
                            </div>
                        )
                }
            }
        }
    ];

    constructor() {
        makeAutoObservable(this, {}, { deep: true });
    }

    showNotification = (type, text) => {
        notification[type]({
            message: text,
            placement: 'bottomRight'
        });
    };

    getRequests = async () => {
        this.loaded = false;
        let response = await $api.get('/api/booking/getRequests');
        this.requests = response.data.data;
        this.loaded = true;
    }

    changeStatus = async (bookingId, statusId, email) => {
        let body = {
            bookingId: bookingId,
            statusId: statusId,
            email: email
        }

        let response = await $api.post('/api/booking/changeStatus', body);
        if (response.data.success) {
            this.showNotification('success', 'Статус заявки изменен!')
            this.getRequests();
        } else {
            this.showNotification('error', 'Ошибка!')
        }
    };

}

export default RequestsStore;