// User
export const getUser = (user) => ({
    type: 'GET_USER',
    payload: user,
});
export const getUserStart = () => ({
    type: 'GET_USER_START',
});
export const getUserFailure = () => ({
    type: 'GET_USER_FAILURE',
});
// Document
export const getDocuments = (document) => ({
    type: 'GET_DOCUMENTS',
    payload: document,
});
export const getDocumentsStart = () => ({
    type: 'GET_DOCUMENTS_START',
});
export const getDocumentsFailure = () => ({
    type: 'GET_DOCUMENTS_FAILURE',
});
