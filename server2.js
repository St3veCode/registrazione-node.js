

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test123',
    database: 'database_3'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connesso al database MySQL');
    
    // Query di inserimento manuale di un utente
    const nome = 'stefano';
    const email = 'nuovo@utente.com';
    const password = 'password123';

    const inserisciUtente = `INSERT INTO utenti (nome, email, password) VALUES (?, ?, ?)`;
    db.query(inserisciUtente, [nome, email, password], (err, result) => {
        if (err) {
            throw err;
        }
        console.log('Utente inserito con successo:', result);
    });
});

app.listen(3000, () => {
    console.log('Server in ascolto sulla porta 3000');
});