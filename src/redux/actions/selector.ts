import { useSelector, shallowEqual } from 'react-redux';

export const useLoading = (key: any) => {
    const state = useSelector<any, any>((x: any) => x, shallowEqual);
    if (state?.requests[key]) {
        return state.requests[key].status === 'PENDING';
    }
    return false;
};
