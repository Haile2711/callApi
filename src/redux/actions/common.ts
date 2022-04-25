import {
    MARK_REQUEST_CANCELLED,
    MARK_REQUEST_PENDING,
    MARK_REQUEST_SUCCESS,
    MARK_REQUEST_FAILED,
    INVOKE_CALLBACK,
} from '@redux/actions/types';

/**
 * REQUEST
 */

export const markRequestPending = (key: string) => ({
    type: MARK_REQUEST_PENDING,
    meta: { key },
});

export const markRequestSuccess = (key: string) => ({
    type: MARK_REQUEST_SUCCESS,
    meta: { key },
});

export const markRequestCancelled = ({ type, reason }: any, key: string) => ({
    type: MARK_REQUEST_CANCELLED,
    payload: `${type}: ${reason || 'called'}`,
    meta: { key },
});

export const markRequestFailed = (reason: any, key: string) => ({
    type: MARK_REQUEST_FAILED,
    payload: reason,
    meta: { key },
});

// INVOKE
export const invokeCallback = (callback: any, ...args: any[]) => ({
    type: INVOKE_CALLBACK,
    payload: callback && callback.call(null, ...args),
});
