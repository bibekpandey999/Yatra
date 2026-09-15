import mongoose, { Schema } from "mongoose";

const rideSchema = new mongoose.Schema({

    rideRequest: {
        type: Schema.Types.ObjectId,
        ref: "RideRequest",
        unique: true,
        required: true
    },

    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
        unique: true,
        required: true
    },

    transporter: {
        type: Schema.Types.ObjectId,
        ref: "TransportProvider",
        required: true,
    },

    pickupLocation: {
        address: {
            type: String,
            requred: true,
            trim: true
        },
        coordinates: {
            type: [Number],
            required: true,
        }
    },
    dropoffLocation: {
        address: {
            type: String,
            required: true,
            trim: true,
        },

        coordinates: {
            type: [Number],
            required: true,
        },
    },

    distanceKm: {
        type: Number,
        min: 0,
    },

    finalFare: {
        type: Number,
        min: 0
    },
    vehicleType: {
        type: String,
        enum: ["Bike", "Car", "Truck", "Bus"],
    },
    passengerCont: {
        type: Number,
        min: 1,
        default: 1
    },
    status: {
        type: String,
        emum: [
            "confirmed",
            "driver_arriving",
            "driver_arrived",
            "started",
            "completed",
            "cancelled"
        ],
        default: "confirmed"
    },
    cancelledBy: {
        type: String,
        enum: ["customer", "transporter", "admin"]
    },
    requestedAt: {
        type: Date,
        default: Date.now,
    },

    acceptedAt: {
        type: Date,
    },

    driverArrivedAt: {
        type: Date,
    },

    startedAt: {
        type: Date,
    },

    completedAt: {
        type: Date,
    },

    cancelledAt: {
        type: Date,
    },

})


export const Ride = mongoose.model("Ride", rideSchema);