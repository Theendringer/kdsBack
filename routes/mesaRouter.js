const express = require('express');
const router = express.Router();
const Mesa = require('../models/mesa');

router.get('/', async (req, res) => {
  try {
    const mesas = await Mesa.findAll();
    res.json(mesas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao listar mesas.' });
  }
});

router.post('/', async (req, res) => {
  const { descricao } = req.body;
  try {
    const mesa = await Mesa.create({ descricao });
    res.json(mesa);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar uma mesa.' });
  }
});


module.exports = router;
