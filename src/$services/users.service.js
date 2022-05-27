import Superagent from 'superagent'

const conexionError = {
    code: 500,
    key: 'appError',
    message: 'Error de conexion'
}

export default {
    userLogin
}

function userLogin(data) {

    return new Promise((resolve, reject) => {
        
        Superagent
            .post('http://localhost:7777/users/login')
            .send(data)
            .end((error, resp) => {

                if (error)
                    return resolve(resp? resp.body : conexionError)

                resolve(resp.body)
            })
    })
}