/* eslint-disable prettier/prettier */
const initialState = {
    userInfor: {
        user: [],
        pending: false,
        error: false,
    },
    documents: {
        document: [],
        pending: false,
        error: false,
    },
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER':
            return {
                ...state,
                userInfor: {
                    user: action.payload,
                    pending: false,
                    error: false,
                },
            };
        case 'GET_USER_START':
            return {
                ...state,
                userInfor: {
                    user: [],
                    pending: true,
                    error: false,
                },
            };
        case 'GET_USER_FAILURE':
            return {
                ...state,
                userInfor: {
                    user: [],
                    pending: false,
                    error: true,
                },
            };
        case 'GET_DOCUMENTS':
            return {
                ...state,
                documents: {
                    document: action.payload,
                    pending: false,
                    error: false,
                },
            };
        case 'GET_DOCUMENTS_START':
            return {
                ...state,
                documents: {
                    document: [],
                    pending: true,
                    error: false,
                },
            };
        case 'GET_DOCUMENTS_FAILURE':
            return {
                ...state,
                documents: {
                    document: [],
                    pending: false,
                    error: true,
                },
            };

        default: {
            return state;
        }
    }
};
export default rootReducer;
