var express = require('express');
var router = express.Router();





router.get('/', (req, res) => {
    /* res.send('/being hit');*/
    require('dotenv').config()

    var app = express();
    const keyPublishable = process.env.PUBLISHABLE_KEY;
    const keySecret = process.env.SECRET_KEY;


    const stripe = require("stripe")(keySecret);

    app.set("view engine", "ejs");
    app.use(require("body-parser").urlencoded({extended: false}));


    const axios=require('axios');

    const exchangeRate=(from,to)=>{
        return axios.get('http://data.fixer.io/api/latest?access_key=0775e66d197f6a7b91f5322eb5264f8f&format=1').then((response)=>{

            let euroBase=response.data.rates[from];
            let rate=euroBase * response.data.rates[to];
            let euro=Math.round(99.99/rate);

            return euro;

        });
    };
    exchangeRate('EUR','USD').then((euro)=> {

        res.render('women-accessories1', { greeting: euro,keyPublishable:keyPublishable});




    });



});



router.get('/example', (req, res) => {
    res.send('/example being hit');
});

module.exports = router;