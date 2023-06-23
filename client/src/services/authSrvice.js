import * as fetchApi from '../api/api'
import { clearUserData } from '../api/util'

export async function login(userData) {

const userLogIn = {
    username: userData.username,
    password: userData.password
}
    const serverRes = await fetchApi.post('/users/login', userLogIn)
    console.log(serverRes);

    return serverRes
}

// export async function register(userData) {

//     const serverRes = await fetchApi.post('/users/register', userData)
    
//     const serverData = {
//         email: serverRes.email, 
//         password: serverRes.password,
//         token: serverRes.accessToken,
//         gender: serverRes.gender,
//         username: serverRes.username,
//         id: serverRes._id
//     }
//     //така ще можем по-лесно да взимаме колко миима е написал, за да визуализираме бройката в userProfile view
//     setUserData(serverData)

// }

export function logout() {
    fetchApi.get('/users/logout')
}