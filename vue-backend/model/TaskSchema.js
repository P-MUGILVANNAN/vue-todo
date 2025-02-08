const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema(
    {
        task:{
            type:String,
            required:true
        },
        completed:{
            type:Boolean,
            default:false
        }
    },{
        collection:'Tasks'
    }
);

module.exports = mongoose.model('Task', TaskSchema);