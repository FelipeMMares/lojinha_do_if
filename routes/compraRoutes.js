const express = require('express');
const compraController = require('../controllers/compraController');
const router = express.Router();

router.get('/', compraController.getAllCompras);
router.get('/:id', compraController.getCompraById);
router.post('/', compraController.createCompra);
router.put('/:id', compraController.updateCompra);
router.delete('/:id', compraController.deleteCompra);

module.exports = router;
