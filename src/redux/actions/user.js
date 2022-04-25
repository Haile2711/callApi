export const getUserStart = () => ({
    type: 'GET_USER_INFOR_START',
});
export const getUserSuccess = (user) => ({
    type: 'GET_USER_INFOR_SUCCESS',
    payload: user,
});
export const getDocumentsSuccess = (document) => ({
    type: 'GET_DOCUMENT_SUCCESS',
    payload: document,
});
export const getUserFailure = () => ({
    type: 'GET_USER_INFOR_FAILURE',
});
