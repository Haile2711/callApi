/* eslint-disable no-empty */
import axios from 'axios';

import { getDocuments, getUser } from '../actions/actions';

export const getDocument = async (dispatch) => {
    try {
        const res = await axios.get(
            'https://api.alpha.vspace.global/api/v1/document/list?page=1&perPage=10&orderBy=createdAt&order=DESC'
        );
        dispatch(getDocuments(res.data.data));
    } catch (e) {}
};
export const getUsers = async (dispatch) => {
    try {
        const res = await axios.get(
            'https://api.alpha.vspace.global/api/v1/user/list/guest?page=1&perPage=10&orderBy=createdAt&order=DESC'
        );
        dispatch(getUser(res.data.data));
    } catch (e) {}
};
