const express = require('express');
const app = express();
const clienteRoutes = require('./routes/clienteRoutes');
const produtoRoutes = require('./routes/produtoRoutes');
const compraRoutes = require('./routes/compraRoutes');

// Configurações
app.use(express.json());

// Rotas
app.use('/clientes', clienteRoutes);
app.use('/produtos', produtoRoutes);
app.use('/compras', compraRoutes);

// Testa rota raiz
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

// Inicialização do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});