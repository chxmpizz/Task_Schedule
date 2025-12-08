import mongoose, { Schema } from "mongoose";
import { describe } from "node:test";

const task = new Schema({
    title : {
        type: String,
        required: true,
        trim: true
    },
    Description : {
        type: String,
        required: false,
        trim : true
    },
    Status : {
        type : String,
        enum : [ "todo" , "in progress" , "done"],
        default : "todo",
        required: true,
    },
    Priority : {
        type : String,
        enum : ["High" , "Medium" , "Low"],
        default : "Low",
        required : true
    },
    Start_Date : {
        type : Date,
        default : Date.now,
        required : true
    },
    Due_Date : {
        type : Date,
        default : Date.now,
        required : true
    },
    Tags : {
        type : [String],
        default : [],
        required : true
    },
    UserId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User",
        required : true
    },
    Category : {
        type : [String],
        required : false,
        trim : true
    }

})
export const Task = mongoose.model("Task", task);