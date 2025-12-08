import mongoose, { Schema } from "mongoose";

const user = new Schema({
    Name : {
        type: String,
        required: true,
        trim: true
    },
    Email : {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    Password : {
        type: String,
        required: true,
        trim: true
    },
    Profile_Img : {
        type: String,
        required: false,
        trim: true
    },
    Occupation : {
        type : String,
        required: true,
        trim: true
    },
    house_Number: {
        type: String, 
        required:false,
        trim : true
    },
    street : {
        type: String,
        required: false,
        trim: true
    },
    subDistrict : {
        type: String,
        required: false,
        trim: true
    },
    district : {
        type: String,
        required: false,
        trim: true
    },
    province : {
        type: String,
        required: false,
        trim: true
    },
    Age : {
        type: Number,
        required: true,
        trim: true
    },
    Phone : {
        type: String,
        required: true,
        trim: true
    },
    Role : {
        type : String,
        enum: ["User", "Freelancer"],
        default: "User"
    },
    LastLoginAt : {
        type: Date,
        default: Date.now
    },
    CreateAt : {
        type: Date,
        default: Date.now
    },
    UpdateAt : {
        type: Date,
        default: Date.now
    }
})

export const User = mongoose.model("User", user);