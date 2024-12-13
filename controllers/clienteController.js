const clienteModel = require('../models/clienteModel');

//controla a listagens de todos os clientes cadastrados
exports.getAllClientes = async (req, res) => {
    try {
        const clientes = await clienteModel.getAll();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//seleciona um cliente específico pelo seu id
exports.getClienteById = async (req, res) => {
    try {
        const id = req.params.id;
        const cliente = await clienteModel.getById(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//controla a "criação" de novo cliente no sistema
exports.createCliente = async (req, res) => {
    try {
        const novoCliente = req.body;
        const insertId = await clienteModel.create(novoCliente);
        res.status(201).json({ id: insertId, message: 'Cliente criado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//controla as atualizações nos dados do cliente cadastrado
exports.updateCliente = async (req, res) => {
    try {
        const id = req.params.id;
        const clienteAtualizado = req.body;
        const affectedRows = await clienteModel.update(id, clienteAtualizado);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Cliente não encontrado para atualizar' });
        }
        res.status(200).json({ message: 'Cliente atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//controla a desativação de cliente do sistema pelo id
exports.deleteCliente = async (req, res) => {
    try {
        const id = req.params.id;
        const affectedRows = await clienteModel.delete(id);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Cliente não encontrado para exclusão' });
        }
        res.status(200).json({ message: 'Cliente excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
