import axios from 'axios';

// creates a customized instance of axios specifically for requests to unsplash
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c282460c59acf8cabad2a00f6f7db2e75a5c278290208282846c3d0206e4971b'
    }
});