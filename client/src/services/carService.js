import * as fetchApi from '../api/data'

const ep = {
    getAll: '/data/cars',
    getById: '/data/cars/',
    // create: '/data/memes',
    // edit: '/data/memes/',
    // delete: '/data/memes/',
    // userCars: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`

}

export async function getAll() {
    return fetchApi.get(ep.getAll)
}
export async function getById(id) {
    return fetchApi.get(ep.getById + id)
}
