import { observer } from 'mobx-react';
import React from 'react';
import { useStores } from '../../useStores';
import { Button, Row, Col, Input } from 'antd';
import '../../less/login.less'

const SignIn = observer((props) => {
    const store = useStores().MainStore;
    return (
        <div className='loginContainer'>
            <Input onChange={store.changeEmail} value={store.email} type={'email'} className='loginContainer__element' placeholder='E-mail' />
            <Input onChange={store.changePassword} value={store.password} type={'password'} className='loginContainer__element' placeholder='Пароль' />
            <Button onClick={store.logIn} className='loginContainer__element'>
                Войти
            </Button>
        </div>

    );
});

export default SignIn;