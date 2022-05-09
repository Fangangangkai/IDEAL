const express = require("express");
// const path = require("path")
// const multer = require('multer');
const mongoose = require("mongoose");
// const moment = require("moment")
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

module.exports = router;