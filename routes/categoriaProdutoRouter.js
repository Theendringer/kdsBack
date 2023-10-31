const express = require('express');
const router = express.Router();
const CategoriaProduto = require('../models/categoriaProduto');

router.get('/', async (req, res) => {
  try {
    const categorias = await CategoriaProduto.findAll();
    res.json(categorias);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao listar categorias de produtos.' });
  }
});

router.post('/', async (req, res) => {
  const { descricao } = req.body;
  try {
    const categoria = await CategoriaProduto.create({ descricao });
    res.json(categoria);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar uma categoria de produto.' });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const categoria = await CategoriaProduto.findByPk(id);
    if (!categoria) {
      res.status(404).json({ error: 'Categoria de produto não encontrada.' });
    } else {
      res.json(categoria);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao obter detalhes da categoria de produto.' });
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { descricao } = req.body;
  try {
    const categoria = await CategoriaProduto.findByPk(id);
    if (!categoria) {
      res.status(404).json({ error: 'Categoria de produto não encontrada.' });
    } else {
      categoria.descricao = descricao;
      await categoria.save();
      res.json(categoria);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar a categoria de produto.' });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const categoria = await CategoriaProduto.findByPk(id);
    if (!categoria) {
      res.status(404).json({ error: 'Categoria de produto não encontrada.' });
    } else {
      await categoria.destroy();
      res.json({ message: 'Categoria de produto excluída com sucesso.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao excluir a categoria de produto.' });
  }
});

module.exports = router;
