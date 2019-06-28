var express = require('express');
var router = express.Router();




router.get('/', (req, res) => {
    /* res.send('/being hit');*/
    const axios=require('axios');

    const exchangeRate=(from,to)=>{
        return axios.get('http://data.fixer.io/api/latest?access_key=0775e66d197f6a7b91f5322eb5264f8f&format=1').then((response)=>{

            let euroBase=response.data.rates[from];
            let rate=euroBase * response.data.rates[to];
            let euro=195/rate;

            return euro;

        });
    };
    exchangeRate('EUR','USD').then((euro)=> {


        res.render('men-accessories12', { greeting: euro});



    });



});



router.get('/example', (req, res) => {
    res.send('/example being hit');
});

module.exports = router;