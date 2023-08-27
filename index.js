const express = require("express")
const app = express();
const bodyParser = require("body-parser")

// configurando decodificação do formulário com body parser
app.use(bodyParser.urlencoded({ extended:false }))

// definindo os arquivos estáticos
app.use(express.static('public'))

// definindo o ejs como a view engine para ser utilizada
app.set("view engine", "ejs")

// configurando porta da aplicação
app.listen(8080, (req, res) => {
    console.log("Aplicação rodando!")
})

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/publicar", (req, res) => {
    res.render("publicar")
})

app.get("/:categoria/:pergunta", (req, res) => {
    var perguntas = [
        {titulo:'O que é...', descricao:'descricao da pergunta 1'},
        {titulo:'Como fazer...', descricao:'descricao da pergunta 2'},
        {titulo:'Alguem pode me ajudar...', descricao:'descricao da pergunta 3'}
    ]

    res.render("perguntas", {
        perguntas: perguntas
    })
})

app.post('/publicar', (req, res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    var usuario = 'usuario1'
    res.send("titulo:" + titulo + " descricao:" + descricao + " usuario:" + usuario)
})
