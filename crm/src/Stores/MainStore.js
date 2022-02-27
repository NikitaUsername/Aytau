import { makeAutoObservable } from 'mobx';
import { notification } from 'antd';
import $api from '../axios';
import axios from 'axios';

class MainStore {

    isLoading = true;
    isAuth = false;
    email = '';
    password = '';
    user = undefined;

    constructor() {
        makeAutoObservable(this);
    }

    checkAuth = async () => {
        if (!localStorage.getItem('token')) {
            this.isLoading = false;
            return;
        }
        try {
            const response = await axios.get('/api/auth/refresh', { withCredentials: true });
            if (response.status === 200) {
                this.user = response.data.user;
                this.isAuth = true;
                localStorage.setItem('token', response.data.tokens.accessToken)
            }
        } catch (e) {
            this.showNotification('error', e.response.statusText);
        }
        this.isLoading = false;
    }

    changeEmail = (e) => {
        this.email = e.target.value;
    }
    changePassword = (e) => {
        this.password = e.target.value;
    }

    showNotification = (type, text) => {
        notification[type]({
            message: text,
            placement: 'bottomRight'
        });
    };

    logIn = async () => {
        let response = await $api.post('/api/auth/login', { email: this.email, password: this.password });
        if (response.status !== 200) {
            this.showNotification('error', response.data);
        } else {
            this.user = response.data.user;
            this.isAuth = true;
            console.log(this.isAuth)
            localStorage.setItem('token', response.data.tokens.accessToken)
        }
    }

    signIn = async () => {
        let response = await $api.post('/api/auth/signin', { email: 'lalalal', password: '12345' });
        console.log(response)
    }

    logOut = async (expired = false) => {
        localStorage.removeItem('token');
        let response = await $api.get('/api/auth/logout', { email: this.email, password: this.password });
        if (response.data) {
            this.isAuth = false;
            this.user = undefined;
            this.password = '';
            this.email = '';
            if (expired)
                this.showNotification('info', 'Время сессии истекло!')
        }
    }

}

export default MainStore;