const BASE_URL = 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list'


export const getData = () => {
    return new Promise((resolve, reject) => {
        fetch(BASE_URL, {
            method: 'GET'
        })
        .then(response => {
            if (response.status !== 200) {
                // failed
                reject(new Error(`Error: ${response.status}`))
            }

            return response.json()
        })
        .then(data => {
            resolve(data)
        })
        .catch(error => {
            reject(new Error(error))
        })
    })
}
