var express = require('express');
var app = express();
var router = express.Router();
//var path = __dirname + '/views/';
var path = __dirname;

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "/views/index.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "/views/404.html");
});

app.listen(3000,function(req,res){
  console.log("Live at Port 3000");
});
