import { takeLatest, all } from 'redux-saga/effects';
import { notification } from 'antd';

import { DEMO } from '@redux/actions/types';
import demo from '@redux/api';

import { createRequestSaga } from './common';

const requestGetDemo = createRequestSaga({
    request: demo.getDemo,
    key: 'getDemo',
    functionSuccess: [(res: any) => notification.success({ message: res?.data })],
    functionFailure: [(err: any) => notification.error({ message: err?.message })],
});

export default [
    function* fetchWatcher() {
        yield all([takeLatest(DEMO, requestGetDemo)]);
    },
];
