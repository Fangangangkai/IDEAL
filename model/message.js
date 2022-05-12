var mongoose = require('mongoose')

var messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "标题不能为空"]
    },
    phone: {
        type: String,
        required: [true, "内容不能为空"]
    },
    liuyan: {
        type: String,
        required: [true, "标题不能为空"]
    },
    created_time: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('message', messageSchema, "message")