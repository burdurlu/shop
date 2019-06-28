var Category=require('../model/categories-new');

var mongoose=require('mongoose');
mongoose.connect('localhost:27017/shop');


var categories=[
    new Category({
        imagePath:'../images/categories/mens-accessories-luggage.jpg',
   title :'Gothic',
   description:'Awesome Game',
   price:10
    }),
    new Category({
        imagePath:'../images/categories/mens-accessories-ties.png',
        title :'Gothic',
        description:'Awesome Game',
        price:10
    })

];

var done=0;
for(var i=0;i<categories.length;i++)
{
    categories[i].save(function(err,result){
        done++;
        if(done===categories.length){
            exit();
        }
    });

}
function exit(){
    mongoose.disconnect();
}