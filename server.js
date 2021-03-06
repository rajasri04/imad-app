var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var config={
     user:'rajasrissn',
     database:'rajasrissn',
     host:'db.imad.hasura-app.io',
     port:'5342',
     password:'process.env.DB_PASSWORD'
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var Pool = new  Pool(config);
app.get('/score-db',function(req,res){
    Pool.query('select * from "score";',function(err,result){
        if(err)
        {
            res.status(500).send(err.toString()) ;
        }
        else{
            res.send(JSON.stringify(result));
        }
    });
    
});
app.get('/tom', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tom.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var counter=0;
app.get('/counter',function(req,res){
    counter = counter+1;
    res.send(counter.toString());
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
