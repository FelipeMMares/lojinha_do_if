const produtoModel = require('../models/produtoModel');

//controla a listagem de todos os produtos regiistrados
exports.getAllProdutos = async (req, res) => {
    try {
        const produtos = await produtoModel.getAll();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//seleciona um produto específico pelo seu id
exports.getProdutoById = async (req, res) => {
    try {
        const id = req.params.id;
        const produto = await produtoModel.getById(id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//controla a criação de novos produtos no sistema
exports.createProduto = async (req, res) => {
    try {
        const novoProduto = req.body;
        const insertId = await produtoModel.create(novoProduto);
        res.status(201).json({ id: insertId, message: 'Produto criado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//controla as atualizações de dados de um produto específico
exports.updateProduto = async (req, res) => {
    try {
        const id = req.params.id;
        const produtoAtualizado = req.body;
        const affectedRows = await produtoModel.update(id, produtoAtualizado);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Produto não encontrado para atualizar' });
        }
        res.status(200).json({ message: 'Produto atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//controla a desativação de um produto específico
exports.deleteProduto = async (req, res) => {
    try {
        const id = req.params.id;
        const affectedRows = await produtoModel.delete(id);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Produto não encontrado para exclusão' });
        }
        res.status(200).json({ message: 'Produto excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
