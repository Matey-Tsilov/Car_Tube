import * as fetchApi from '../api/api'

const ep = {
    getAll: '/data/cars',
    getById: '/data/cars/',
    create: '/data/cars',
    // edit: '/data/cars/',
    // delete: '/data/cars/',
    // userCars: (userId) => `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`

}

export async function getAll() {
    return fetchApi.get(ep.getAll)
}
export async function getById(id) {
    return fetchApi.get(ep.getById + id)
}
export async function create(carInfo) {
    return fetchApi.post(ep.create, carInfo)
}
