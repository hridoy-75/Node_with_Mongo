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
        //DeleteOneItem(myMongoClinet)
       // DeleteAllItem(myMongoClinet)
        //FindOneWithoutCondition(myMongoClinet)
        //FindOneWithCondition(myMongoClinet)
        //FindAllData(myMongoClinet)
        //FindAllDataByProjection(myMongoClinet)
        //FindAllDataByQuery(myMongoClinet)
        //FindAllDataByLimit(myMongoClinet)
        //FindAllDataBySort(myMongoClinet)
        //UpdateMyData(myMongoClinet)

        //CreateMyCollection(myMongoClinet)
        //DeleteMyCollection(myMongoClinet)
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

function DeleteOneItem(myMongoClinet) {
    const MyDataBase = myMongoClinet.db("student");
    const MyCollection = MyDataBase.collection('students');

    const DeleteItem={Roll:"02"}
    MyCollection.deleteOne(DeleteItem, function (error) {
        if (error){
console.log("Data Delete Fail")
        }
        else {
            console.log("Data Delete Success")
        }

    });


};
function DeleteAllItem(myMongoClinet) {
    const MyDataBase = myMongoClinet.db("student");
    const MyCollection = MyDataBase.collection('students');

    
    MyCollection.deleteMany( function (error,ResultObj) {
        if (error){
console.log("Data Fail")
        }
        else {
            console.log(ResultObj)
        }

    });


}


function FindOneWithoutCondition(myMongoClinet) {
     const MyDataBase = myMongoClinet.db("student");
    const MyCollection = MyDataBase.collection('students');

    const FindObj={}
    MyCollection.findOne(FindObj, function (error,result) {
       console.log(result)

    })
}


function FindOneWithCondition(myMongoClinet) {
     const MyDataBase = myMongoClinet.db("student");
    const MyCollection = MyDataBase.collection('students');

    const FindObj={"Roll":"05"}
    MyCollection.findOne(FindObj, function (error,result) {
       console.log(result)

    })
}



function FindAllData(myMongoClinet) {
     const MyDataBase = myMongoClinet.db("student");
    const MyCollection = MyDataBase.collection('students');

    
    MyCollection.find().toArray( function (error,result) {
       console.log(result)

    })
}

function FindAllDataByProjection(myMongoClinet) {
     var MyDataBase = myMongoClinet.db("student");
    var MyCollection = MyDataBase.collection('students');

    var ItemObj = {}
    var ItemProjection = { projection: { Class: "", Roll: "" }}
    
    MyCollection.find(ItemObj,ItemProjection).toArray( function (error,result) {
       console.log(result)

    })
}

function FindAllDataByQuery(myMongoClinet) {
     const MyDataBase = myMongoClinet.db("student");
    const MyCollection = MyDataBase.collection('students');

   var Query={Roll:"01"}
    MyCollection.find(Query).toArray( function (error,result) {
       console.log(result)

    })
}

function FindAllDataByLimit(myMongoClinet) {
     const MyDataBase = myMongoClinet.db("student");
    const MyCollection = MyDataBase.collection('students');

   
    MyCollection.find().limit(3).toArray( function (error,result) {
       console.log(result)

    })
}

function FindAllDataBySort(myMongoClinet) {
     const MyDataBase = myMongoClinet.db("student");
    const MyCollection = MyDataBase.collection('students');

   const SortPattern={Roll:1}

    MyCollection.find().sort(SortPattern).toArray( function (error,result) {
       console.log(result)

    })
}

function UpdateMyData(myMongoClinet) {
     const MyDataBase = myMongoClinet.db("student");
    const MyCollection = MyDataBase.collection('students');

    const MyQuery = { Roll: "04" };
    const MyNewValues={$set:{ name:"Liton Sarker", City:"Gazipur"}}
    
    MyCollection.updateOne(MyQuery,MyNewValues, function (error,result) {
       console.log(result)

    })
}

function CreateMyCollection(myMongoClinet){
    var MyDataBase = myMongoClinet.db("school");
    MyDataBase.createCollection("teachers", function (error,result) {
        console.log(result)

    })
}

function DeleteMyCollection(myMongoClinet){
    var MyDataBase = myMongoClinet.db("school");
    MyDataBase.dropCollection("teachers", function (error,result) {
        console.log(result)

    })
}