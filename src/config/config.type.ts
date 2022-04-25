export interface Response<T = any> {
    data?: T;
    error?: T;
    code: number;
    status?: boolean;
    msg?: string | undefined | null;
    message?: string | undefined | null;
}

export interface SagaRequest {
    // key of api to make Request: pending, success, fail, ...
    key: any;

    // axios request: get, push, pop, delete
    request: any;

    // dispatch action success example: save Token, save Profile user, ...
    success?: any;

    // dispatch action error example: remove Profile, remove Token
    failure?: any;

    // khi 1 action cancel đc gọi thì hủy request đang gọi đi
    cancel?: any;

    // function call, ex: Alert, Toast, Popup, ...
    functionSuccess?: any;

    // function call, ex: Alert, Toast, Popup, ...
    functionFailure?: any;

    timeout?: number;

    stop?: any;

    start?: any;

    cancelled?: any;
}
