const express = require('express');
const app = express();
app.use(express.json());

const baseConsulta = {};

const funcoes = {

    LembreteCriado:(lembrete) => {
        baseConsulta[lembrete.contador] = lembrete;
    },
    ObservaçaoCriada:(observacao) => {

        const observacoes = baseConsulta[observacao.lembreteId]["observacoes"] || [];
        observacoes.push(observacao);
        baseConsulta[observacao.lembreteId]["observacoes"] = observacoes;
    }
};

app.get('/lembretes', (req,res)=>{

})

app.post('/eventos',(req,res) => {

})

app.listen(6000, () => {
    console.logo('consultas porta 6000')
});