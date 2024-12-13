const pool = require('../database/db');

exports.getAll = async () => {
    const [rows] = await pool.query('SELECT * FROM cliente');
    return rows;
};

exports.getById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM cliente WHERE id_client = ?', [id]);
    return rows[0];
};

exports.create = async (cliente) => {
    const { name, email, bornDate, status } = cliente;
    const [result] = await pool.query('INSERT INTO cliente (name, email, bornDate, status) VALUES (?, ?, ?, ?)', [name, email, bornDate, status]);
    return result.insertId;
};

exports.update = async (id, cliente) => {
    const { name, email, bornDate, status } = cliente;
    const [result] = await pool.query('UPDATE cliente SET name = ?, email = ?, bornDate = ?, status = ? WHERE id_client = ?', [name, email, bornDate, status, id]);
    return result.affectedRows;
};

exports.delete = async (id) => {
    const [result] = await pool.query('DELETE FROM cliente WHERE id_client = ?', [id]);
    return result.affectedRows;
};