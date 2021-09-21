const bodyParser = require('body-parser');
const express = require('express');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
const lembretes = {};
contador = 0;

app.get('/lembretes', (req , res ) => {
    res.send(lembretes);
});

//app.put('lembretes/:id/observacoes', (req,res) => {
    
//async assincrono

  app.put('/lembretes', async(req , res )=>{
    contador++;
    const {texto} = req.body;
    lembretes[contador] = { contador , texto }

    axios.post("http://localhost:10000/eventos", {
        tipo: "lembrete criado",
        dados: {contador,texto},

    });

    res.status(201).send(lembretes[contador])
});

app.post("/eventos", (req,res) => {
    console.log(req.body);
    res.status(200).send({msg: "ok" });

});

app.listen(4000, () => {

    console.log('Lembretes : Porta 4000')
});
