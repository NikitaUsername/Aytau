import React from 'react';
import { useStores } from '../useStores';
import { observer } from 'mobx-react';
import { Button } from 'antd';

const Main = observer((props) => {

    const store = useStores().MainStore;

    return (
        <div>
            <p className='userName'>
                {store?.user?.name}&nbsp;{store?.user?.surname}
            </p>
            <Button onClick={store.logOut}>
                Выйти
            </Button>
        </div>
    );
});

export default Main;