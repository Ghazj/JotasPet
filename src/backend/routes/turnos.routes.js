const express = require('express');
const router = express.Router();
const Turnos = require('../models/turnos.js');

router.get('/', async (req, res)=>{
    if(Object.keys(req.query).length > 0){
        console.log(req.query);
        const turnos = await Turnos.find(req.query);
        res.json(turnos)
    }else{
        console.log(req.query);
        const turnos = await Turnos.find();
        res.json(turnos)
    }
});

router.get('/:id', async (req, res)=>{
    const turnos = await Turnos.findById(req.params.id);
    res.json(turnos)
    console.log(req)
});

router.post('/', async (req, res)=>{
    await Turnos.create(req.body)
    res.json({status: 'Turno Recibido'})
})

router.put('/:id', async (req, res) =>{
    await Turnos.findByIdAndUpdate(req.params.id ,req.body)
    res.json({status: 'Turno actualizado'})
})

router.delete('/:id', async (req, res) =>{
    await Turnos.findByIdAndRemove(req.params.id)
    res.json({status: 'Turno cancelado'})
})

module.exports = router;