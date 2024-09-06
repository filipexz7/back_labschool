const { request } = require("express");
const alunoservice = require(',, services/alunoservices')


module.exports = [
    
    updateAluno: async (request, response) => {
        let json = {error: "", result: ""}

        let id = request.params.id

        let foto = request.file.buffer
        let nome = request.body.nome 
        let telefone = request.body.telefone
        let data_nascimento = request.body.data_nascimento
        let email = request.body.email
        if(nome != "" && telefone != "" && data_nascimento != "" && email != "") {
            await alunoService.updateAluno (id, foto, nome, telefone, email, data_nascimento)

            json.result = `Aluno ${nome} cadastrado feito { ${id}}`
        response.status(201).json(json)

        }else{
            json.error = "error"
            response.status(400).json(json)
        } 
    }






]