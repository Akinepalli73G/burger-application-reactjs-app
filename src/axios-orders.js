import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://santhosh-burger-builder-app.firebaseio.com/'
});

export default instance;