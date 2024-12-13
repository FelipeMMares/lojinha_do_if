const compraModel = require('../models/compraModel');

//controla a listagem de todas as compras registradas
exports.getAllCompras = async (req, res) => {
    try {
        const compras = await compraModel.getAll();
        res.status(200).json(compras);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//seleciona dados de uma compra especifica pelo seu id
exports.getCompraById = async (req, res) => {
    try {
        const id = req.params.id;
        const compra = await compraModel.getById(id);
        if (!compra) {
            return res.status(404).json({ message: 'Compra não encontrada' });
        }
        res.status(200).json(compra);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//controla a "criação" de novos registros
exports.createCompra = async (req, res) => {
    try {
        const novaCompra = req.body;
        const insertId = await compraModel.create(novaCompra);
        res.status(201).json({ id: insertId, message: 'Compra criada com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//controla as atualizações dos registros
exports.updateCompra = async (req, res) => {
    try {
        const id = req.params.id;
        const compraAtualizada = req.body;
        const affectedRows = await compraModel.update(id, compraAtualizada);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Compra não encontrada para atualizar' });
        }
        res.status(200).json({ message: 'Compra atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//controla a desativação de um registro específico
exports.deleteCompra = async (req, res) => {
    try {
        const id = req.params.id;
        const affectedRows = await compraModel.delete(id);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Compra não encontrada para exclusão' });
        }
        res.status(200).json({ message: 'Compra excluída com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


