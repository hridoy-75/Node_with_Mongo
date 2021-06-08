const MongoClient = require('mongodb').MongoClient;
const URL = "mongodb+srv://hridoydemo:NpXXiBXd8eCclOIx@cluster0.eprsz.mongodb.net/student?retryWrites=true&w=majority";
const config =  { useNewUrlParser: true, useUnifiedTopology: true }

MongoClient.connect(URL, config, function (error,myMongoClinet) {
    if (error) {
        console.log("Connection fail")
    }
    else {
        console.log("Connection Success");
        InsertData(myMongoClinet);
    }
});


function InsertData(myMongoClinet) {
    const MyDataBase = myMongoClinet.db("student");
    
    const MyCollection = MyDataBase.collection('students');

    const MyData = {
    
        name: "Hridoy",
        Roll: "01",
        Class: "Twelve",
        City: "Sirajganj"
    };

    MyCollection.insertOne(MyData, function (error) {
        if (error) {
        console.log("Data Insert Fail")
        }
        else {
             console.log("Data Insert success")
        }
     })
    }


