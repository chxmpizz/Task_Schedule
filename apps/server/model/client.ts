import mongoose, { mongo } from "mongoose";

const client = new mongoose.Schema ({
    UserId : {
        type : mongoose.Schema.Types.ObjectId , ref : 'User',
        require : true
    },
    Appointment_date : {
        type : Date,
        default : Date.now(),
        require : true
    },
})

export const Client = mongoose.model("Client" , client)