import Superagent from 'superagent'

const conexionError = {
    code: 500,
    key: 'appError',
    message: 'Error de conexion'
}

export default {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}

function getTasks(query) {

    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')
        
        Superagent
            .get(`http://localhost:7777/tasks`)
            .set('token', token)
            .query(query)
            .end((error, resp) => {

                if (error)
                    return resolve(resp? resp.body : conexionError)

                resolve(resp.body)
            })
    })
}

function createTask(data) {

    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')
        
        Superagent
            .post(`http://localhost:7777/tasks`)
            .set('token', token)
            .send(data)
            .end((error, resp) => {

                if (error)
                    return resolve(resp? resp.body : conexionError)

                resolve(resp.body)
            })
    })
}

function updateTask(taskId, data) {

    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')
        
        Superagent
            .put(`http://localhost:7777/tasks/${ taskId }`)
            .set('token', token)
            .send(data)
            .end((error, resp) => {

                if (error)
                    return resolve(resp? resp.body : conexionError)

                resolve(resp.body)
            })
    })
}

function deleteTask(taskId) {

    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token')
        
        Superagent
            .delete(`http://localhost:7777/tasks/${ taskId }`)
            .set('token', token)
            .end((error, resp) => {

                if (error)
                    return resolve(resp? resp.body : conexionError)

                resolve(resp.body)
            })
    })
}