import { fork, all } from 'redux-saga/effects';

import demo from './demo';
import auth from './auth';

const rootSaga = function* () {
    yield all([...demo.map((watcher) => fork(watcher))]);
    yield all([...auth.map((watcher) => fork(watcher))]);
};

export default rootSaga;
