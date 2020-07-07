'use strict'

const controller = 
{
    datosCurso:(req,res)=>{
        var hola=req.body.hola;
            return res.status(200).send({
                curso:'Master en Frameworks JS',
                author:'Christian Escobar',
                url:'christian-escobar.netlify.app',
                hola
            });
    },

    test:(req,res)=>{
        return res.status(200).send({
            message:'Soy la accion test de mi controlador de articulos'
        });
    }
};

module.exports = controller;