import mysql from "mysql"; // IMPORTANDO MYSQL

// CRIANDO A CONEXAO
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'crud',

});