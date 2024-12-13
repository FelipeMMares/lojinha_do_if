const pool = require('../database/db');

exports.getAll = async () => {
    const [rows] = await pool.query('SELECT * FROM compra');
    return rows;
};

exports.getById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM compra WHERE id_conmpra = ?', [id]);
    return rows[0];
};

exports.create = async (compra) => {
    const { total, status, id_cliente, id_produto } = compra;
    const [result] = await pool.query('INSERT INTO compra (total, status, id_cliente, id_produto) VALUES (?, ?, ?, ?)', [total, status, id_cliente, id_produto]);
    return result.insertId;
};

exports.update = async (id, compra) => {
    const { total, status, id_cliente, id_produto } = compra;
    const [result] = await pool.query('UPDATE compra SET total = ?, status = ?, id_cliente = ?, id_produto = ? WHERE id_conmpra = ?', [total, status, id_cliente, id_produto, id]);
    return result.affectedRows;
};

exports.delete = async (id) => {
    const [result] = await pool.query('DELETE FROM compra WHERE id_conmpra = ?', [id]);
    return result.affectedRows;
};
