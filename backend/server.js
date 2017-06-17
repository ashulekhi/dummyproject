var express = require('express');
var path = require('path');
var sha1 = require('sha1');


var MongoClient = require('mongodb').MongoClient
  
// Connection url
var url = 'mongodb://localhost:27017/dummyprojectdb';








var app = express();

app.use(express.static(path.resolve(__dirname + './../frontend/views')));

app.use(express.static(path.resolve(__dirname + './../frontend')));

console.log(path.resolve(__dirname + './../frontend'),">>>>>")


app.get('/' , function(req,res){
	res.render('index.html');  //project ki main html file 
})


console.log(__dirname);


app.post('/signUp' , function(req,res){

	console.log('>>> data received from front' , req.query);
	req.query.password = sha1(req.query.password);

MongoClient.connect(url , function(err,db){

if(err){
	console.log(err);
}
console.log('connected')

db.collection('users').findOne({username:req.query.username,password:req.query.password} , function(err,data){
if(err){
	return res.send('Error');
}

setTimeout(function(){
	res.send('created');
} , 8000)


})




})

})



app.listen(9000,function(){


	console.log('server started');
});


