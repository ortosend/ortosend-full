const express = require('express');
const router = express.Router();
const Cita = require('../models/Cita');

router.post('/crear', async (req, res) => {
  try {
    const nuevaCita = new Cita(req.body);
    await nuevaCita.save();
    res.status(201).json({ mensaje: 'Cita registrada' });
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al guardar cita' });
  }
});

module.exports = router;