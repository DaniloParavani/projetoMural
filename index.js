const PORT = 3000;
const express = require('express');

const app = express();


let posts = [
    {
        id: "teste01",
        title: "Teste de mural",
        description: "Descrição teste"
    }
]

app.get("/all", (req, res) => {

    res.json(JSON.stringify(posts))
});

app.post("/new", (req, res) => {});


app.listen(PORT, () => {
    console.log(`Servidor conectado na porta ${PORT}`)
})