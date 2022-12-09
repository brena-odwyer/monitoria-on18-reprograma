const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livros");

router.post("/cadastrar", livroController.cadastrarLivro)

module.exports = router;