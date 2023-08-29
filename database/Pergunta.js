const Sequelize = require("sequelize")
const conexao = require("./dados")

const Pergunta = conexao.define('pergunta', {
    titulo: {
        // Tipo TEXT é usado para textos curtos
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        // Tipo TEXT é usado para textos longos
        type: Sequelize.TEXT,
        allowNull: false
    }
})

// Campo "force" definido como "false" significa que o sistema 
// não vai forçar a criação da tabela caso ela ja exista
Pergunta.sync({force: false}).then(() => {})

module.exports = Pergunta