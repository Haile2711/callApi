/* eslint-disable no-empty */
import axios from 'axios';

import { getDocumentsSuccess } from '../actions/user';

const getDocuments = async (dispatch) => {
    try {
        const res = await axios.get(
            'https://api.alpha.vspace.global/api/v1/document/list?page=1&perPage=10&orderBy=createdAt&order=DESC'
        );
        dispatch(getDocumentsSuccess(res.data));
    } catch (error) {}
};
export default getDocuments;
