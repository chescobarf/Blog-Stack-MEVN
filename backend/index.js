'use strict'

const mongoose = require('mongoose');
const connectionString="mongodb+srv://christianAdmin:christianAdmin@cluster0.vpxka.mongodb.net/BlogVueJs?retryWrites=true&w=majority";
var app = require('./app');
var port = 3900;

mongoose.set('useFindAndModify',false);
mongoose.Promise=global.Promise;
mongoose.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
    console.log('Conexion a Mongo Correcta');
    
    //creacion del servidor y escucha de peticiones
    app.listen(port,()=>{
        console.log('Servidor Corriendo en el puerto: '+port)
    })
});

