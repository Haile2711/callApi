import { call, put, take, race, delay } from 'redux-saga/effects';
import { message } from 'antd';
import { API_TIMEOUT, TIME_ERROR, CODE_SUCCESS } from '@src/config/api';
import { SagaRequest } from '@src/config/config.type';
import {
    markRequestCancelled,
    markRequestSuccess,
    markRequestPending,
    markRequestFailed,
    invokeCallback,
} from '@redux/actions';
import logger from '@libs/logger';

const { APP_ENV } = process.env;

interface RaceOption {
    [key: string]: any;
}

export const rejectErrors = (response: any) => {
    const { status, data, problem } = response;
    if (!data && problem === TIME_ERROR) {
        message.error('Quá thời gian kết nối máy chủ!');
    }
    if (!data) {
        return Promise.reject({ message: problem });
    }
    return Promise.reject({
        code: data?.statusCode,
        message: data?.message,
        error: data?.error || null,
        status,
        data: data?.data || null,
    });
};

export const createRequestSaga = ({
    key,
    stop,
    start,
    cancel,
    request,
    success,
    failure,
    cancelled,
    functionSuccess,
    functionFailure,
    timeout = API_TIMEOUT,
}: SagaRequest) =>
    function* (action: any) {
        // saga sẽ lấy action , actions sẽ truyền vào 1 array args
        let args = action.args || [];

        // console.log('KEY>>', key);
        // define là item cuối của args sẽ là callback, check xem có callback ko?
        const callback = typeof args[args.length - 1] === 'function' ? args[args.length - 1] : null;
        if (callback) {
            args = args.slice(0, -1);
        }

        // error first callback
        let ret = null;
        let err = null;

        // Store into redux
        // RequestKey is the "key" to store the "state" in "redux" for that request
        const requestKey = typeof key === 'function' ? key(...args) : key;

        if (start) {
            for (const actionCreator of start) {
                yield put(actionCreator());
            }
        }

        // Mark pending
        yield put(markRequestPending(requestKey));
        try {
            // this is surely Error exception, assume as a request failed (Giả định có 1 error)
            if (!request) {
                throw new Error('Api method not found !!!');
            }

            // Start invoke
            const invokeRequest = async () => {
                const response = await request.apply(request, args);
                if (APP_ENV === 'development' || APP_ENV === 'local') {
                    logger.debug(`🚧🚧🚧 ${response.config.url} `, response, args);
                }
                if (response && response?.ok && response.data?.statusCode === CODE_SUCCESS) {
                    return response.data;
                }
                return rejectErrors(response);
            };

            const raceOptions: RaceOption = {
                data: call(invokeRequest),
                isTimeout: delay(timeout),
            };

            // Action cancel
            if (cancel) {
                raceOptions.cancelRet = take(cancel);
            }

            // Run race() thực hiện việc gọi request, timeout và cancel cái nào xong trước thì dừng lại
            const { data, isTimeout, cancelRet } = yield race(raceOptions);

            if (isTimeout) {
                throw new Error(`Api method is timeout after ${timeout} ms!!!`);
            } else if (cancelRet) {
                // Callback on success
                if (cancelled) {
                    for (const actionCreator of cancelled) {
                        yield put(actionCreator(cancelRet, action));
                    }
                }
                // Mark cancelled request
                yield put(markRequestCancelled(cancelRet, requestKey));
            } else {
                // Callback success
                if (success) {
                    for (const actionCreator of success) {
                        yield put(actionCreator(data, action));
                    }
                }

                if (functionSuccess) {
                    for (const actionCreator of functionSuccess) {
                        actionCreator(data);
                    }
                }

                // Finally mark the request success (thành công)
                yield put(markRequestSuccess(requestKey));

                // Assign data, for cancel both ret and err is null
                ret = data;
            }
        } catch (reason) {
            if (failure) {
                for (const actionCreator of failure) {
                    yield put(actionCreator(reason, action));
                }
            }
            if (functionFailure) {
                for (const actionCreator of functionFailure) {
                    actionCreator(reason);
                }
            }
            yield put(markRequestFailed(reason, requestKey));

            // Mark error
            err = reason;
        } finally {
            if (stop) {
                for (const actionCreator of stop) {
                    yield put(actionCreator(ret, action));
                }
            }
            if (callback) {
                yield put(invokeCallback(callback, err, ret));
            }
        }
    };
