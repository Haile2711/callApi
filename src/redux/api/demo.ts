import { API, setHeader } from './common';

export default {
    getUser: (lang?: string) =>
        API.get(
            'https://api.alpha.vspace.global/api/v1/user/list/guest?page=1&perPage=10&orderBy=createdAt&order=DESC',
            {},
            setHeader(null, lang)
        ),
};
