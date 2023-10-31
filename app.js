const express = require('express');
const app = express();

const categoriaProdutoRouter = require('./routes/categoriaProdutoRouter');
const produtoRouter = require('./routes/produtoRouter');
const mesaRouter = require('./routes/mesaRouter');
const compraRouter = require('./routes/compraRouter');
const itemCompraRouter = require('./routes/itemCompraRouter');

app.use(express.json());

app.use('/categorias', categoriaProdutoRouter);
app.use('/produtos', produtoRouter);
app.use('/mesas', mesaRouter);
app.use('/compras', compraRouter);
app.use('/itenscompra', itemCompraRouter);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
