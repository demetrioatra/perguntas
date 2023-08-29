const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const conexao = require("./database/dados")
const Pergunta = require("./database/Pergunta")

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended:false }))
app.set("view engine", "ejs")

app.listen(8080, (req, res) => { console.log("Aplicação rodando!") })

conexao.authenticate().then(() => {
    console.log("Conectado ao banco!")
}). catch(err => {
    console.log(err)
})

// Rotas
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/:categoria/:pergunta", (req, res) => {
    Pergunta.findAll({raw: true}).then((perguntas) => {
        res.render("perguntas", {
            perguntas: perguntas
        })
    })
})

app.get("/publicar", (req, res) => {
    res.render("publicar")
})

app.post('/publicar', (req, res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    })
})
