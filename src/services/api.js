import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        authorization: localStorage.token || sessionStorage.token || null,
    },
});
