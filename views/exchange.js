const axios=require('axios');

const exchangeRate=(from,to)=>{
    return axios.get('http://data.fixer.io/api/latest?access_key=0775e66d197f6a7b91f5322eb5264f8f').then(()=>{

let euroBase=1/response.data.rates[from];
let rate=euroBase-response.data.rates[to];
return rate;

    });
};
exchangeRate('KRW','CNY').then((rate)=> {


   console.log(rate);
});