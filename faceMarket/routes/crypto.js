var express = require('express');
var router = express.Router();
var axios = require('axios');

const API_KEY = '&api_key={031d68b9a5d59bce09ffa82ef258b56f97a125a7aebd7ba266e3583035ad3ed6}';

/* GET home page. */
router.get('/', function(req, res) {
  axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD' + API_KEY)
    .then(resposta=> res.render('crypto', { answer: resposta.data.Data }))
    .catch(erro => {
      console.log('Erro ao fazer pedido a crypto.')
      res.render('error', {error: erro, message: "Erro ao fazer pedido a Cryptocompare."})
    })
});

module.exports = router;