import { API, setHeader } from './common';

export default {
    login: (params: any) => API.post('auth/login', params),
    logout: (token: string) => API.post('auth/logout', {}, setHeader(token)),
    getProfile: (token: string) => API.get('users/profile', {}, setHeader(token)),
    getCurrentRoles: (token: string) => API.get('roles/current', {}, setHeader(token)),
};
