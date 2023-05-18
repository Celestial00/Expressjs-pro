const { default: mongoose } = require('mongoose');
const mongodb = require('mongoose');

const task = new mongodb.Schema({

    title :{
        type:String,
        required: true
    }
    
})

module.exports = mongoose.model('task', task )