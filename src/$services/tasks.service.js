import Superagent from 'superagent'

const conexionError = {
    code: 500,
    key: 'appError',
    message: 'Error de conexion'
}

export default {
    getTasks
}

function getTasks(query) {

    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')
        
        Superagent
            .get('http://localhost:7777/tasks')
            .set('token', token)
            .query(query)
            .end((error, resp) => {

                if (error)
                    return resolve(resp? resp.body : conexionError)

                resolve(resp.body)
            })
    })
}