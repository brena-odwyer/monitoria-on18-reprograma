const Livro = require("../models/livros");

const cadastrarLivro = async (req, res) => {
    try {
        const { title, author, year } = req.body;

        const novoLivro = new Livro({
            title,
            author,
            year
        })

        const livroExiste = await Livro.findOne({title: req.body.title})
        if(livroExiste) {
            return res.status(400).json({
                error: "Livro já cadastrado"
            })
        }

        const salvarLivro = await novoLivro.save()
        res.status(200).json({
            message: "Livro cadastrado com sucesso",
            salvarLivro
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    cadastrarLivro
}