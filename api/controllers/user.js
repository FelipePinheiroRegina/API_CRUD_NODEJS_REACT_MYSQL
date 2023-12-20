import { db } from "../db.js"; // IMPORTANDO MEU DB

export const getUsers = (_, res) => {  // COMO SE TRATA DE GETUSERS NÃO PRECISA DO REQ
    const q = "SELECT * FROM usuarios"; // AQUI SERIA "Q" DE QUERY, AMARZENANDO O COMANDO SELECIONE TODOS OS CAMPOS NA TABELA USUARIOS

    db.query(q, (err, data) => {  // AQUI EU ESTOU PASSANDO MEU BANCO.QUERY, COMO PARAMETRO MINHA QUERY, E UMA FUNÇÃO
        if(err) return res.json(err);  // SE ERRO, RETORNA ERRO

        return res.status(200).json(data);  // SE NÃO, RETORNA TODOS MEUS USUARIOS
    });
};

