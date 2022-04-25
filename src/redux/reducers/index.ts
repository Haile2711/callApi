import { combineReducers } from 'redux';

import requests from './common';
import auth from './auth';

export default combineReducers({
    requests,
    auth,
});
