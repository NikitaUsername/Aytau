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
        {
            title: 'Сумма',
            dataIndex: 'totalAmount',
            render: (value) => value.toFixed(2)
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
    isModalRequestOpen = false;
    currentRequest = {};
    isRequestEdit = false;
    editableRequest = {};

    constructor(mainStore) {
        makeAutoObservable(this, {}, { deep: true });
        this.mainStore = mainStore;
    }

    showNotification = (type, text) => {
        notification[type]({
            message: text,
            placement: 'bottomRight'
        });
    };

    getRequests = async () => {
        this.loaded = false;
        try {
            let response = await $api.get('/api/booking/getRequests');
            this.requests = response.data.data;
        } catch (e) {
            if (e.status === 401)
                this.mainStore.logOut(true);
        }
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

    openRequest = async (idx) => {
        console.log(idx)
        this.currentRequest = this.requests[idx];
        this.isModalRequestOpen = true;
    }

    closeRequestModal = () => {
        this.isModalRequestOpen = false;
    }

    editRequest = () => {
        this.isRequestEdit = true;
        this.editableRequest = this.currentRequest;
    }

    saveRequest = () => {
        this.isRequestEdit = false;
        // this.editableRequest = this.currentRequest;
    }

}

export default RequestsStore;