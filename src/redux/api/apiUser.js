/* eslint-disable no-empty */
import axios from 'axios';

import { getUserSuccess, getUserStart, getUserFailure } from '../actions/user';

const getUserInfor = async (dispatch) => {
    dispatch(getUserStart());
    try {
        const res = await axios.get(
            'https://api.alpha.vspace.global/api/v1/user/list/guest?page=1&perPage=10&orderBy=createdAt&order=DESC'
        );
        dispatch(getUserSuccess(res.data.data));
    } catch (error) {
        dispatch(getUserFailure(error));
    }
};
export default getUserInfor;
