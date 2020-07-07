'use strict'

// Cargar Modulos de Node para crear el servidor
const express = require('express');
const bodyParser = require('body-parser')

// Ejecutar Express para trabajar con el HTTPS
var app = express();

//cargar ficheros de rutas
const article_routes = require('./routes/article')


//cargar MiddleWares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//activar el CORS --> permite peticiones del Front

//Anadir prefijos de rutas / cargar rutas
app.use('/api',article_routes)



//Exportar Modulos
module.exports=app;