const express = require('express');
const router = express.Router();
const Compra = require('../models/compra');

router.get('/', async (req, res) => {
  try {
    const compras = await Compra.findAll();
    res.json(compras);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao listar compras.' });
  }
});

router.post('/', async (req, res) => {
  const { nomeCliente, dtCompra, id_mesa } = req.body;
  try {
    const compra = await Compra.create({ nomeCliente, dtCompra, id_mesa });
    res.json(compra);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar uma compra.' });
  }
});


module.exports = router;
