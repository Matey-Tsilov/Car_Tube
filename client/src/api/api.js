//import { notify } from "../common/notify.js"
import { getUserData } from "./util.js"

const host = "http://localhost:3030"

async function request(url, options) {
    
    try {
        const res = await fetch(host + url, options)

        if (!res.ok) {
        const problem = await res.json()
        throw new Error(problem.message)
        }

         if (res.status == 204) {
             return res
        }

        return await res.json()

    } catch (err) {
        //alert(err.message)
        //notify(err.message)
        throw err
    }
    
}

function createOptions(method = 'get', data) {
    const options = {
        method,
        headers: {

        }
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }
    const userData = getUserData()
    
    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken
    }
    
    return options
}

async function get(url) {
    return request(url, createOptions())
}
async function post(url, data) {
    return request(url, createOptions('post', data))
}
async function put(url, data) {
    return request(url, createOptions('put', data))
}
async function del(url) {
    return request(url, createOptions('delete'))
}

export {
    get,
    post,
    put,
    del
}