/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mehmet:Mburdurlu500.@shop-0m04e.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("categories");
    console.log("connected");
    var ins={name:'mehmet3',email:'mebunet3@hotmail.com'};

    collection.insertOne(ins,function(err,res) {
    console.log("data inserted");
    });

    client.close();
});



function getAllGamers(uri) {
    console.log("processing...");
    return new Promise(function (resolve, reject) {

        console.log("connecting...");

        MongoClient.connect(uri, function (err, db) {
            var dbo = db.db("test");
            var query = {};
            console.log("fetching...");
            dbo.collection("categories")
                .find(query)
                .toArray(function (err, result) {
                    if (err) {
                        reject(err);
                    } else {
                        console.log("we have gamers now...")
                        resolve(result)
                    }
                    db.close();
                });
        });
    })
};

function main() {
   const uri = "mongodb+srv://mehmet:Mburdurlu500.@shop-0m04e.mongodb.net/test?retryWrites=true&w=majority"
    getAllGamers(uri).then(function (result) {
        console.log(result);
    }, function (err) {
        console.log(err);
    });
    console.log("mongodb examples...")
};

main();*/
