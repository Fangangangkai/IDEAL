const express = require("express")
const message = require("../modules/message")
const router = express.Router()


//留言页面
router.get("/message", (req, res) => {
    res.render("message.html")
})


//提交留言
router.post("/postMessage", async (req, res) => {
    var body = req.body
    var data = await new message({
        name: body.name,
        email: body.email,
        phone: Number(body.phone),
        message: body.message
    })

    await data.save(function (err) {
        if (err) {
            console.log("留言信息入库失败了");
            return;
        }
        else{
            res.redirect("getmsglast")
        }
    })

})

router.get("/getmsg", (req, res) => {
    message.find().then(function (data) {
        res.send({
            code: 200,
            res: data,
            msg: "请求成功"
        })
    })
})

router.get("/getmsglast", (req, res) => {
    message.find().sort({ _id: -1 }).limit(1).then(function (data) {
        res.send({
            code: 200,
            res: data
        })
    })
})


module.exports = router;