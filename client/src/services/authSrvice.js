import * as fetchApi from '../api/api'
import { clearUserData } from '../api/util'

export async function login(userData) {

const userLogIn = {
    username: userData.username,
    password: userData.password
}
    const serverRes = await fetchApi.post('/users/login', userLogIn)

    return serverRes
}

export async function register(userData) {

    const newUser = {
        password: userData.password,
        username: userData.username
    }
    const serverRes = await fetchApi.post('/users/register', newUser)
    
    return serverRes

}

export async function logout() {
    fetchApi.get('/users/logout')
}