import { takeLatest, all } from 'redux-saga/effects';
import { notification } from 'antd';
import Router from 'next/router';
import { actGetProfile, actSaveAuthInfo, actSavePermissions, actSaveProfile } from '@redux/actions';
import { LOGIN, LOGOUT, GET_PROFILE, GET_CURRENT_ROLES } from '@redux/actions/types';
import auth from '@redux/api';

import { createRequestSaga } from './common';

const requestLogin = createRequestSaga({
    request: auth.login,
    key: 'login',
    success: [
        (res: any) => actGetProfile(res?.data?.accessToken),
        (res: any) =>
            actSaveAuthInfo({
                token: res?.data?.accessToken,
                refreshToken: res?.data?.refreshToken,
                expiredAt: res?.data?.expiredAt,
            }),
    ],
});

const requestLogout = createRequestSaga({
    request: auth.logout,
    key: 'logout',
    success: [
        () => actSaveAuthInfo({ token: undefined, accessToken: null, expiredAt: null }),
        () => actSaveProfile(null),
    ],
    failure: [() => actSaveAuthInfo({ token: undefined, accessToken: null, expiredAt: null })],
    functionSuccess: [(res: any) => notification.success({ message: res?.message }), () => Router.push('/login')],
    functionFailure: [(err: any) => notification.error({ message: err?.message }), () => Router.push('/login')],
});

const requestGetProfile = createRequestSaga({
    request: auth.getProfile,
    key: 'getProfile',
    success: [(res: any) => actSaveProfile(res?.data)],
});

const requestGetCurrentRole = createRequestSaga({
    request: auth.getCurrentRoles,
    key: 'getCurrentRoles',
    success: [(res: any) => actSavePermissions(res?.data || [])],
});

export default [
    function* fetchWatcher() {
        yield all([takeLatest(LOGIN, requestLogin)]);
        yield all([takeLatest(LOGOUT, requestLogout)]);
        yield all([takeLatest(GET_PROFILE, requestGetProfile)]);
        yield all([takeLatest(GET_CURRENT_ROLES, requestGetCurrentRole)]);
    },
];
