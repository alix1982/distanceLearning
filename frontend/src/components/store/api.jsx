import axios from 'axios';
// import { BASE_URL } from '../../consts';

// export const API_URL = BASE_URL;
const {REACT_APP_BASE_URL} = process.env;
// const REACT_APP_BASE_URL = 'http://83.147.244.4/api/';
// console.log(REACT_APP_BASE_URL);
export const apiRequest = axios.create({
    withCredentials: true,
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
    },
    baseURL: REACT_APP_BASE_URL,
});

apiRequest.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// apiRequest.interceptors.response.use(
//     (config) => {
//         // console.log(config)
//         return config;
//     },
//     async (error) => {
//         // на случай если токен не валидный (пользователь не активный в админке) чистим сторедж
//         // и чистим стейт юзера в authentificationSlice при fetchMeUser.rejected
//         if (error.response.status == 401 && error.response.data.code === 'user_inactive') {
//             // console.log('очистил локал сторидж (блок inactive)');
//             localStorage.clear();
//             sessionStorage.clear();
//         }

//         // если токен-acces не валидный(по истечении некоторого времени) запрос новой пары {refresh, acces} токенов и запись в сторедж
//         if (error.response.status == 401 && localStorage.getItem('refresh')) {
//             // console.log(error)
//             try {
//                 axios
//                     .post(`${API_URL}authentification/token/refresh/`, {
//                         refresh: localStorage.getItem('refresh'),
//                     })
//                     .then((res) => {
//                         // console.log('заполнил локал сторидж (блок try)');
//                         sessionStorage.setItem('token', res.data.access);
//                         localStorage.setItem('refresh', res.data.refresh);
//                         error.config.headers.Authorization = `Bearer ${res.data.access}`;
//                     })
//                     .catch((e) => {
//                         console.error(e);
//                         localStorage.clear();
//                         sessionStorage.clear();
//                         // console.log('очистил локал сторидж (блок try)');
//                     });

//                 return apiRequest.request(error.config);
//             } catch (e) {
//                 console.error(e);
//                 localStorage.clear();
//                 sessionStorage.clear();
//                 // console.log('очистил локал сторидж (блок catch)');
//             }
//         }
//         throw error;
//     }
// );

// export const fileLoader = axios.create({
//     headers: {
//         accept: 'application/json',
//         'Content-Type': 'multipart/form-data',
//     },
//     baseURL: API_URL,
// });

// fileLoader.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`;
//     return config;
// });

// export const loadMyAvatar = async (file) => {
//     return await fileLoader.put(`/user/me/avatar`, { file });
// };

// export const deleteMyAvatar = async () => {
//     return await fileLoader.put(`/user/me/avatar`, null);
// };

// export const loadAdvancedTraining = async (data) => {
//     return await fileLoader.post(`/doctors/advanced_training/`, data);
// };

// Получение списка городов
// export const getCity = async (searchString) => {
//     return await apiRequest.get(`/user/me/cities/?search=${searchString}&page_size=${2000}`);
// };
