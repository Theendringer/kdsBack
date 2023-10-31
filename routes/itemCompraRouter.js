const express = require('express');
const router = express.Router();
const ItemCompra = require('../models/itemCompra');

router.get('/', async (req, res) => {
  try {
    const itensCompra = await ItemCompra.findAll();
    res.json(itensCompra);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao listar itens de compra.' });
  }
});

router.post('/', async (req, res) => {
  const { qtd, valorUni, id_compra, id_produto } = req.body;
  try {
    const itemCompra = await ItemCompra.create({ qtd, valorUni, id_compra, id_produto });
    res.json(itemCompra);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar um item de compra.' });
  }
});


module.exports = router;
