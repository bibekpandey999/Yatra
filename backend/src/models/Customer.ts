import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "name must contain at least 3 characters"]
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: [3, "Password must be at least 3 characters"],
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    profileImage: {
        url: {
            type: String,
            default: "",
        },
        public_id: {
            type: String,
            default: "",
        },
    },
    currentLocation: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point",
        },
        coordinates: {
            type: [Number],
            default: [85.3240, 27.7172],
        },
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    otp: {
        type: String,
        default: null,
    },

    otpExpire: {
        type: Date,
        default: null,
    },


}, { timestamps: true });

CustomerSchema.index({ currentLocation: "2dsphere" });

const Customer = mongoose.model("Customer", CustomerSchema)
export default Customer;