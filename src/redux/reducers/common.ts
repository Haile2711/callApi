import {
    MARK_REQUEST_CANCELLED,
    MARK_REQUEST_SUCCESS,
    MARK_REQUEST_PENDING,
    MARK_REQUEST_FAILED,
} from '@redux/actions/types';

/**
 * REQUEST
 * @method requests()
 * @param state
 * @param { type, payload, meta }
 * @returns
 */

const requests = (state = {}, { type, payload, meta }: any) => {
    switch (type) {
        case MARK_REQUEST_PENDING:
            return { ...state, [meta.key]: { status: 'PENDING', error: null } };
        case MARK_REQUEST_SUCCESS:
            return { ...state, [meta.key]: { status: 'SUCCESS', error: null } };
        case MARK_REQUEST_FAILED:
            return {
                ...state,
                [meta.key]: { status: 'FAILED', error: payload },
            };
        case MARK_REQUEST_CANCELLED:
            return { ...state, [meta.key]: { status: 'CANCELLED', error: null } };
        default:
            return state;
    }
};
export default requests;
