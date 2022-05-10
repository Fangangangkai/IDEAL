const express = require('express')
const path = require("path")
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
//创建web服务器
const app = express()

//自定义路由模块
var messageRouters=require('./router/message');


//静态资源访问
app.use('/public/', express.static('public'));
app.use('/', express.static('views'));
app.use('/node_modules', express.static(path.join(__dirname, "node_modules")));

//注册模板引擎
app.engine('html',require('express-art-template'));
//修改express-art-template默认的视图路径
app.set("views", __dirname + "/views");

//post中间件
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 
// parse application/json
app.use(bodyParser.json());



mongoose.connect("mongodb://localhost:27017/H5");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("数据库连接成功");
});


//注册路由
app.use('/',messageRouters);


//启动web服务器
app.listen(3333, () => {
    console.log('express serve running at http://127.0.0.1:3333')
  })