import * as fetchApi from '../api/api'
import { setUserData, clearUserData } from '../api/util';

export async function login(username, password) {

    const serverRes = await fetchApi.post('/users/login', {username, password})
    console.log(serverRes);
    
    // const userData = {
    //     email: serverRes.email, 
    //     password: serverRes.password,
    //     token: serverRes.accessToken,
    //     gender: serverRes.gender,
    //     username: serverRes.username,
    //     id: serverRes._id
    // }
    
    //така ще можем по-лесно да взимаме колко миима е написал, за да визуализираме бройката в userProfile view
    //работи само при стари версии на сървъра!//await get(`/data/memes?where=_ownerId%3D%22${userData.id}%22&count`)
    // setUserData(userData)

}

export async function register(username, email, password, gender) {

    const serverRes = await fetchApi.post('/users/register', {username, email, password, gender})
    
    const userData = {
        email: serverRes.email, 
        password: serverRes.password,
        token: serverRes.accessToken,
        gender: serverRes.gender,
        username: serverRes.username,
        id: serverRes._id
    }
    //така ще можем по-лесно да взимаме колко миима е написал, за да визуализираме бройката в userProfile view
    setUserData(userData)

}

export async function logout() {
    await fetchApi.get('/users/logout')
    clearUserData()
}