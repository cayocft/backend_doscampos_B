const express = require('express');
const router = express.Router();
const controlador = require('../servicios/registroForm/controlador');

router.post('/crear-registro',controlador.crearRegistroForm);
router.get('/obtener-registros',controlador.obtenerRegistroForm);

module.exports = router;
