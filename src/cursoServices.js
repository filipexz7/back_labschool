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
 updateCurso = (id, nome, quantidade) => {
    return new Promise((resolve, reject) => {
        // Corrigir a consulta SQL e a sintaxe da função
        const query = 'UPDATE curso SET nome = ?, quantidade = ? WHERE id = ?';

        // Passar os parâmetros de forma segura para evitar SQL Injection
        database.query(query, [nome, quantidade, id], (error, result) => {
            if (error) {
                return reject(error);
            }
            resolve(result);
        });
    });
};

        return

    resolve(result)




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

