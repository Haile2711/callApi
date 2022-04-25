/**
 * REQUEST - check status of 1 request to the server: pending, success, failure -- see more in reducers - common.js
 */

export const INVOKE_CALLBACK = 'app/invokeCallBack';
export const MARK_REQUEST_FAILED = 'request/requestFailed';
export const MARK_REQUEST_PENDING = 'request/requestPending';
export const MARK_REQUEST_SUCCESS = 'request/requestSuccess';
export const MARK_REQUEST_CANCELLED = 'request/requestCancelled';

/**
 * REQUEST CUSTOM FOR THEME
 */

// DEMO
export const DEMO = 'DEMO';

// AUTH
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SAVE_AUTH_INFO = 'SAVE_AUTH_INFO';
export const GET_PROFILE = 'GET_PROFILE';
export const SAVE_PROFILE = 'SAVE_PROFILE';
export const GET_CURRENT_ROLES = 'GET_CURRENT_ROLES';
export const SAVE_PERMISSIONS = 'SAVE_PERMISSIONS';
