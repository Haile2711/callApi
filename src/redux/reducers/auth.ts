import { SAVE_AUTH_INFO, SAVE_PERMISSIONS, SAVE_PROFILE } from '@redux/actions/types';
import { GENERAL } from '@src/config/permissions';

const initialState = {
    token: null,
    refreshToken: null,
    expiredAt: null,
    profile: null,
    isLoggedIn: false,
    permissions: [GENERAL],
};

const auth = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case SAVE_AUTH_INFO:
            return {
                ...state,
                token: payload?.token || null,
                refreshToken: payload?.refreshToken || null,
                expiredAt: payload?.expiredAt || null,
                isLoggedIn: !!payload?.token || false,
            };
        case SAVE_PROFILE:
            return {
                ...state,
                profile: payload,
            };
        case SAVE_PERMISSIONS: {
            let newPermission: any[] = [];
            if (payload?.length > 0) {
                payload.forEach((e: any) => {
                    newPermission = newPermission.concat(e.permissions);
                });
            }
            newPermission = newPermission.filter((item, index) => newPermission.indexOf(item) === index);
            return {
                ...state,
                permissions: [...newPermission, GENERAL],
            };
        }
        default:
            return state;
    }
};

export default auth;
