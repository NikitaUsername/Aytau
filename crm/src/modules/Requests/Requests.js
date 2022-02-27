import React, { useEffect } from 'react';
import { Table, Spin } from 'antd';
import { useStores } from '../../useStores';
import { observer } from 'mobx-react';
import RequestModal from './RequestModal';

const Requests = observer(() => {
    let store = useStores().RequestsStore;
    let mainStore = useStores().MainStore;


    useEffect(() => {
        store.getRequests();
    }, [store])

    return (
        <div>
            {/* {store.loaded && */}
            <Spin spinning={!store.loaded}>
                < Table
                    columns={store.columns}
                    dataSource={store.requests}
                    onRow={(_, rowIndex) => {
                        return {
                            onClick: _ => store.openRequest(rowIndex)
                        };
                    }}
                />
                <RequestModal />
            </Spin>
            {/* } */}
        </div>
    );
});

export default Requests;