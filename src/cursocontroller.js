const  { response} = require('express');
const cursoServices = require('./cursoServices');
const { json } = require('body-parser');
const curosservice = requiere('service/cursoservice')

const cursoServices = require('./cursoServices'); 

module.exports = {
    finDATURMAS: async (request, response) => {
        let json = { erro: '', resultado: [] };
        try {
            
        } catch (error) {
            json.erro = 'Erro ao buscar turmas';
        }
        response.status(200).json(json);
    },

    saveCurso: async (request, response) => {
        let json = { erro: '', resultado: {} };
        let nome = request.body.nomeCurso;

        if (nome) {
            try {
                let curso = await cursoServices.saveCurso(nome);
                json.resultado = {
                    id: curso.id,
                    nome: nome
                };
                response.status(201).json(json);
            } catch (error) {
                json.erro = 'Erro ao salvar curso';
                response.status(500).json(json);
            }
        } else {
            json.erro = 'Nome do curso é obrigatório';
            response.status(400).json(json);
        }
    },

    updateCurso: async (request, response) => {
        let json = { erro: '', resultado: {} };
        let id = request.params.id; 
        let nome = request.body.nome;
        let quantidade = request.body.quantidade;

        if (id) {
            try {
                let curso = await cursoServices.findCursoById(id);

                if (curso.length === 0) {
                    json.erro = 'Curso não encontrado';
                    response.status(404).json(json);
                } else {
                    await cursoServices.updateCurso(id, nome, quantidade);
                    json.resultado = `Curso ${curso.nome} atualizado com sucesso`;
                    response.status(200).json(json);
                }
            } catch (error) {
                json.erro = 'Erro ao atualizar curso';
                response.status(500).json(json);
            }
        } else {
            json.erro = 'ID do curso é obrigatório';
            response.status(400).json(json);
        }
    },

    deleteCurso: async (request, response) => {
        let json = { erro: '', resultado: {} };
        let id = request.params.id; 

        if (id) {
            try {
                let curso = await cursoServices.findCursoById(id);

                if (curso.length === 0) {
                    json.erro = 'Curso não encontrado';
                    response.status(404).json(json);
                } else {
                    await cursoServices.deleteCurso(id);
                    json.resultado = `Curso ${curso.nome} excluído com sucesso`;
                    response.status(200).json(json);
                }
            } catch (error) {
                json.erro = 'Erro ao excluir curso';
                response.status(500).json(json);
            }
        } else {
            json.erro = 'ID do curso é obrigatório';
            response.status(400).json(json);
        }
    }
};








