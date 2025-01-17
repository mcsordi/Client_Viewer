import { errorInterceptor } from './interceptors/ErrorInterceptor';
import { responseInterceptor } from './interceptors/ResponseInterceptor';
import { Enviroment } from '../../../environment/index';
import axios from 'axios';

const Api = axios.create({ baseURL: Enviroment.URL_BASE });
Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error),
);

export { Api };
