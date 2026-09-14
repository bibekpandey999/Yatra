import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        length: [3,]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        length: [3,]
    },
    profileImage: {
        type: String,
        default: "",
    },

},{timestamps: true});

const Admin= mongoose.model("Admin",AdminSchema)