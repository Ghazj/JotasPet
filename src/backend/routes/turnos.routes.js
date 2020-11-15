const express = require('express');
const router = express.Router();
const Turnos = require('../models/turnos.js');

router.get('/', async (req, res)=>{
   const turnos = await Turnos.find();
   console.log(turnos)
   res.json(turnos)
});

router.get('/:name', async (req, res)=>{
    const turnos = await Turnos.findById(req.params.name);
    console.log(turnos)
    res.json(turnos)
});

 router.get('/:petName', async (req, res)=>{
    const turnos = await Turnos.find(req.params.petName);
    console.log(turnos)
    res.json(turnos)
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