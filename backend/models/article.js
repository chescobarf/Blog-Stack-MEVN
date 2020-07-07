//Un modelo es una clase que nos da un molde para crear diferentes objetos utilizando tal modelo
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//creacion de modelo de articulo, creando a traves de esquema de mongoose
var ArticleSchema = Schema({
    title: String,
    content:String,
    date:{type: Date, default:Date.now},
    image: String
});

//es importante tener por cada coleccion de datos que tengamos en la BD, tengamos un modelo.

module.exports=mongoose.model('Article',ArticleSchema);
// mongoose crea un 'articles' --> que guarda documentos de este tipo y con estructura