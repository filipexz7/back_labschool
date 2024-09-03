const databse = require ("../database0")

module.exports = {
 readCursos: () => {
    return new Promise((resolve,project) => {
        database.query('select * from curso', (error,resulte) => {
            if(error){
                reject(error)
                return
            }
            resolve(result)
            })
        })
    }
 }


findCursoByid: (id) => {
    return new Promise((resolve, reject) => {
        databse.query('SELECT * FROM curso MHERE id = ${id})' ,(error, result) =>{
            if(error){
                reject(error)
                return
            }
            resolve(result)
            })
    })
}
module.exports = {

},

uptadeCurso: (id,nome, quantidade) => {
return new Promise((resolve, reject) => {
    database.query('UPTADE curso set from * "$(nome)", quantidade"$(quantidade"where id = $(id)',(error,result)) => {
        reject(error)
        return
    }
    resolve(result)
}

}

deleteCurso: (id) => {
    return Promise((resolve,reject) => {
        databse.query('delete from curso where id = $(id)'), (error, result) =>{
            if(error){
                reject(error)
                return
            }

            resolve(result)
        }
    })
}

