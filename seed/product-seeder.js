var Product=require('../models/product');

var mongoose=require('mongoose');
mongoose.connect('localhost:27017/shop');
mongoose.set('useNewUrlParser', true);





var products=[
    new Product({
        imagePath:'https://s1.gaming-cdn.com/images/products/2361/271x377/gothic-universe-edition-cover.jpg',
        title :'Gothic',
        description:'Awesome Game',
        price:10
    }),
    new Product({
        imagePath:'https://s1.gaming-cdn.com/images/products/2361/271x377/gothic-universe-edition-cover.jpg',
        title :'Gothic',
        description:'Game',
        price:30
    })

];

var done=0;
for(var i=0;i<products.length;i++)
{
    products[i].save(function(err,result){
        done++;
        if(done===products.length){
            exit();
        }
    });

}
function exit(){
    mongoose.disconnect();
}