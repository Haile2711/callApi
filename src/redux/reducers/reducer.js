/* eslint-disable prettier/prettier */
const initialState = {
    userInfor: {
        user: [],
    },
    documents: {
        document: [],
    },
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER':
            return {
                ...state,
                userInfor: {
                    user: action.payload,
                },
            };
        case 'GET_DOCUMENTS':
            return {
                ...state,
                documents: {
                    document: action.payload,
                },
            };

        default: {
            return state;
        }
    }
};
export default rootReducer;
