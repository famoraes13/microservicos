const express = require('express');
const axios = require("axios");

const app = express();
app.use(express.json());



app.listen(8000,() => {
    console.log('Observacoes Urgentes : Porta 8000');

});