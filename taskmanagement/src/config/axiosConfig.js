import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_URL
  ? process.env.REACT_APP_SERVER_URL
  : "https://taskmanagement-be.wtztechnologies.com/";
// const baseURL = "http://192.168.1.136:8080/";
// "https://192.168.173.11:18096/";
// const baseURL = 'http://192.168.100.59:8089/api/' /// mihai url

// const baseURLPython = 'http://192.168.100.32:5000/' /// andrei AI url

// const accessToken = lscache.get('accessToken')

// export const checkStatus = (status) => {
//   return {
//     is200: status === 200,
//     is202: status === 202,
//     is401: status === 401,
//     is403: status === 403,
//     is405: status === 405,
//     is404: status === 404,
//     is500: status === 500,
//     is501: status === 501,
//   };
// };

// const AuthHeader = () => {
//   if (accessToken) {
//     return {
//       Authorization: `Bearer ${accessToken}`,
//       'X-engage-initiator': 'frontend',
//       'Content-Type': 'application/json',
//     }
//   } else {
//     return {
//       'X-engage-initiator': 'frontend',
//       'Content-Type': 'application/json',
//     }
//   }
// }

export const REST = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    // ...AuthHeader(),
  },
});

// REST.interceptors.request.use(
//   async config => {
//     const token = lscache.get('accessToken')

//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`
//     }

//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   },
// )

// REST.interceptors.response.use(
//   response => {
//     return new Promise((resolve, reject) => {
//       resolve(response)
//     })
//   },
//   async error => {
//     const requestStatus = checkStatus(error.response.status)

//     // the user is not authorized
//     if (requestStatus.is401) {
//       // If token is not valid or expired clear lscache.
//       // Also, here you can do refresh token API call

//       window.location.href = '/'
//       lscache.flush()
//     }
//     return Promise.reject(error)
//   },
// )
