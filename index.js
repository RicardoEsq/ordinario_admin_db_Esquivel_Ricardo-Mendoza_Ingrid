const express = require('express');

const mysql = require('mysql');

const app = express();

const port = 3000;


// Configuración de la conexión a la base de datos

const db = mysql.createConnection({

    host: 'localhost',

    user: 'root',

    password: '13124', //e

    database: 'ordinario_modelo_admin'

});


// Conexión a la base de datos

db.connect((err) => {

    if (err) {

        console.error('Error al conectar a MySQL:', err);

        return;

    }

    console.log('Conexión exitosa a MySQL');

});


// Endpoint inicial

app.get('/', (req, res) => {

    res.send('Servidor de Node.js funcionando correctamente!');

});


// Endpoint para obtener estudiantes

app.get('/estudiantes', (req, res) => {

    const query = 'SELECT * FROM estudiantes';

    db.query(query, (err, results) => {

        if (err) {

            res.status(500).send('Error en la consulta');

            console.error(err);

        } else {

            res.json(results);

        }

    });

});


// Endpoint para obtener maestros

app.get('/maestros', (req, res) => {

    const query = 'SELECT * FROM maestros';

    db.query(query, (err, results) => {

        if (err) {

            res.status(500).send('Error en la consulta');

            console.error(err);

        } else {

            res.json(results);

        }

    });

});


// Endpoint para obtener materias

app.get('/materias', (req, res) => {

    const query = 'SELECT * FROM materias';

    db.query(query, (err, results) => {

        if (err) {

            res.status(500).send('Error en la consulta');

            console.error(err);

        } else {

            res.json(results);

        }

    });

});


// Endpoint para obtener calificaciones

app.get('/calificaciones', (req, res) => {

    const query = 'SELECT * FROM calificaciones';

    db.query(query, (err, results) => {

        if (err) {

            res.status(500).send('Error en la consulta');

            console.error(err);

        } else {

            res.json(results);

        }

    });

});


// Iniciar el servidor

app.listen(port, () => {

    console.log(`Servidor escuchando en http://localhost:${port}`);

});

