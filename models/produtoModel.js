const pool = require('../database/db');

exports.getAll = async () => {
    const [rows] = await pool.query('SELECT * FROM produtos');
    return rows;
};

exports.getById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM produtos WHERE id_product = ?', [id]);
    return rows[0];
};

exports.create = async (produto) => {
    const { name, brand, price, quantity, status } = produto;
    const [result] = await pool.query('INSERT INTO produtos (name, brand, price, quantity, status) VALUES (?, ?, ?, ?, ?)', [name, brand, price, quantity, status]);
    return result.insertId;
};

exports.update = async (id, produto) => {
    const { name, brand, price, quantity, status } = produto;
    const [result] = await pool.query('UPDATE produtos SET name = ?, brand = ?, price = ?, quantity = ?, status = ? WHERE id_product = ?', [name, brand, price, quantity, status, id]);
    return result.affectedRows;
};

exports.delete = async (id) => {
    const [result] = await pool.query('DELETE FROM produtos WHERE id_product = ?', [id]);
    return result.affectedRows;
};
