const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/eventos', (req,res) => {
    const evento = req.body;
   
    //envia evento para microsserviço de lembretes
    axios.post('http://localhost:4000/eventos', evento);

    //envia evento para microsserviço de observações
    axios.post('http://localhost:5000/eventos', evento);

    //envia o evento para o microsserviço de consulta
    axios.post("http://localhost:6000/eventos", evento);
    
    //envia o evento para o microsserviço de classificacao
    axios.post("http://localhost:7000/eventos", evento);

        //envia o evento para o microsserviço de observacoes-urgentes
        
    //;axios.post("http://localhost:6000/eventos", evento);

    res.status(200).send({msg:"ok"});

});

app.listen(10000,() => {
    console.log('Barramento de vento : Porta 10000');

});
