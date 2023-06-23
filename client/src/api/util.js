function getUserData() {
    const item = sessionStorage.getItem('userData')
    return JSON.parse(item)
}

function setUserData(userData) {
    sessionStorage.setItem('userData', JSON.stringify(userData))
}

function clearUserData() {
    sessionStorage.removeItem('userData')
}

export{
    getUserData,
    setUserData,
    clearUserData
}