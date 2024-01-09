



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
});

app.post('/registrazione', (req, res) => {
    const { nome, email, password } = req.body;
    const inserisciUtente = `INSERT INTO utenti (nome, email, password) VALUES (?, ?, ?)`;
    db.query(inserisciUtente, [nome, email, password], (err, result) => {
        if (err) {
            res.send('Errore durante la registrazione');
            throw err;
        }
        res.send('Registrazione completata con successo');
    });
});

app.listen(3000, () => {
    console.log('Server in ascolto sulla porta 3000');
});