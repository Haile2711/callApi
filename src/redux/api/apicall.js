/* eslint-disable no-empty */
import axios from 'axios';

import {
    getDocuments,
    getDocumentsStart,
    getDocumentsFailure,
    getUser,
    getUserStart,
    getUserFailure,
} from '../actions/actions';

export const getDocument = async (dispatch) => {
    dispatch(getDocumentsStart());
    try {
        const res = await axios.get(
            'https://api.alpha.vspace.global/api/v1/document/list?page=1&perPage=10&orderBy=createdAt&order=DESC'
        );
        dispatch(getDocuments(res.data.data));
    } catch (e) {
        dispatch(getDocumentsFailure());
    }
};
export const getUsers = async (dispatch) => {
    dispatch(getUserStart());
    try {
        const res = await axios.get(
            'https://api.alpha.vspace.global/api/v1/user/list/guest?page=1&perPage=10&orderBy=createdAt&order=DESC'
        );
        dispatch(getUser(res.data.data));
    } catch (e) {
        dispatch(getUserFailure());
    }
};
