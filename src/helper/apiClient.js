import axios from 'axios';

const apiClient = () =>
{   
    axios.defaults.baseURL = 'https://leadandpush.com/?rest_route=/wp/v2/'
    const axiosInstance = axios.create(
        {
            resonseType: 'json',
        });
        ;
    return axiosInstance
};

export default apiClient;