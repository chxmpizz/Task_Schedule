import mongoose, { Schema } from "mongoose";
import { User } from "./user";

const schedule = new Schema ({
    Topic : {
        type : String ,
        default : "Schedule Topic",
        require : false,
        trim : false
    },
    Schedule_date : {
        type : Date,
        require : true,
        default : Date.now()
    },
    OwnerId : {
        type : mongoose.Schema.Types.ObjectId, ref : 'User' ,
        require : true
    },
    ClientId : {
        type : mongoose.Schema.Types.ObjectId, ref : "Client",
        require : true
    },
    Priority : {
        type : String,
        enum : ["High" , "Medium" , "Low"],
        default : "Low",
        require : true,
    },
    Status : {
        type : String,
        enum : ["pending" , "confirmed" , "cancelled" , "done"],
        default : "pending",
        require : false
    },
    Locate : {
        type : String,
        require : true,
        trim : false
    },
    Related_Task : {
        type : mongoose.Schema.Types.ObjectId , ref : 'Task',
        require : true
    }
})

export const Schedule = mongoose.model('Schedule' , schedule);