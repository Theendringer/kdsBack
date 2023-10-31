const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');

router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao listar produtos.' });
  }
});

router.post('/', async (req, res) => {
  const { nome, preco, descricao, id_categoria } = req.body;
  try {
    const produto = await Produto.create({ nome, preco, descricao, id_categoria });
    res.json(produto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar um produto.' });
  }
});


module.exports = router;
