const express = require("express");
const Message = require("../model/message");
const path = require("path");
// const multer = require('multer');
const mongoose = require("mongoose");
const moment = require("moment");
const router = express.Router();

router.get("/index", (req, res) => {
    res.render("index.html")
})

router.get("/product", (req, res) => {
    res.render("product.html")
})

router.get("/honor", (req, res) => {
    res.render("honor.html")
})

router.get("/connection", (req, res) => {
    res.render("connection.html")
})

router.get("/product_news_1", (req, res) => {
    res.render("product_news_1.html")
})

router.get("/message", async (req, res) => {
    // 通过model里的message表查找
    let data = await Message.find();
    console.log(data);
    // data = data.map(item => {
    //     item.created_time = moment(item.created_time).format("YYYY-MM-DD HH:mm:ss");
    //     return item;
    // })
    res.render("message.html", { mess: data });
})

router.post("/message", async (req, res) => {
    // console.log(req.body, 'mmmmm');
    // const { name, email, phone } = req.body;
    var message = new Message(req.body);
    await message.save();
    res.redirect('/message')
})
module.exports = router;