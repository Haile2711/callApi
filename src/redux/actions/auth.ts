import { GET_CURRENT_ROLES, GET_PROFILE, LOGIN, LOGOUT, SAVE_AUTH_INFO, SAVE_PERMISSIONS, SAVE_PROFILE } from './types';

// Auth action
export const actLogin = (...args: any) => ({
    type: LOGIN,
    args,
});

export const actSaveAuthInfo = (payload: any) => ({
    type: SAVE_AUTH_INFO,
    payload,
});

export const actLogout = (...args: any) => ({
    type: LOGOUT,
    args,
});

export const actGetProfile = (...args: any) => ({
    type: GET_PROFILE,
    args,
});

export const actSaveProfile = (payload: any) => ({
    type: SAVE_PROFILE,
    payload,
});

export const actGetCurrentRole = (...args: any) => ({
    type: GET_CURRENT_ROLES,
    args,
});

export const actSavePermissions = (payload: any[]) => ({
    type: SAVE_PERMISSIONS,
    payload,
});
