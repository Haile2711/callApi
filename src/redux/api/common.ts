import { create } from 'apisauce';
import { API_TIMEOUT, API_ENDPOINT } from '@src/config/api';

/**
 * Create base http request use apisauce - base from axios -- https://github.com/infinitered/apisauce
 */

const API = create({
    baseURL: API_ENDPOINT,
    timeout: API_TIMEOUT,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
});

const setHeader = (token: string | null = null, lang: string = 'vi') => {
    if (!token) {
        return { headers: { lang } };
    }
    return { headers: { Authorization: `Bearer ${token}`, lang } };
};

export { API, setHeader };
