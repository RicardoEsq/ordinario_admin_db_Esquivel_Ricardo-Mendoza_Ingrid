const express = require('express');

const mysql = require('mysql');

const dotenv = require('dotenv');


dotenv.config();


const app = express();

app.use(express.json());


// Configuración de la base de datos

const db = mysql.createConnection({

    host: process.env.DB_HOST,

    user: process.env.DB_USER,

    password: process.env.DB_PASSWORD,

    database: process.env.DB_NAME,

    port: process.env.DB_PORT,

});


// Conexión a la base de datos

db.connect((err) => {

    if (err) {

        console.error('Error al conectar a la base de datos:', err);

        return;

    }

    console.log('Conectado a la base de datos MySQL');

});


// Endpoint de prueba

app.get('/', (req, res) => {

    res.send('API REST funcionando correctamente');

});


// Servidor

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Servidor corriendo en el puerto ${PORT}`);

});

