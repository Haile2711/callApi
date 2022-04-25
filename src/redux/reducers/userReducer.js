const initialState = {
    user: {
        userInfor: [],
    },
    documents: {
        document: [],
    },
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_INFOR_SUCCESS':
            return {
                user: {
                    userInfor: action.payload,
                },
            };
        case 'GET_DOCUMENT_SUCCESS':
            return {
                documents: {
                    document: action.payload,
                },
            };

        default:
            return state;
    }
};

export default rootReducer;
