import { Router } from "express";
import {
    registerCustomer, loginUser, logout, getCustomerProfile,
    updateCustomerProfile, changeCustomerPassword, requestRide, cancelRideRequest,
    getRideRequestStatus, getCurrentRide , getMatchedTransporter, cancelRide, getRideStatus
} from "../controllers/CustomerController.js";

import isAuthenticated from "../middleware/isAuthenticated.js";

const router = Router();

router.post("/register", registerCustomer);
router.post("/login", loginUser);
router.post("/logout", logout);
router.get("/get-profile", isAuthenticated, getCustomerProfile);
router.post("/change-password", isAuthenticated, changeCustomerPassword);
router.post("/update-profile",isAuthenticated,updateCustomerProfile);
router.post("/request-ride",isAuthenticated,requestRide);
router.post("/cancel-ride-request",isAuthenticated, cancelRideRequest);
router.get("/get-ride-request/:id",isAuthenticated,getRideRequestStatus);
router.get("/get-ride/:id",isAuthenticated,getCurrentRide);
router.post("/cancel-ride",isAuthenticated, cancelRide);
router.get("/get-ride-status/:id",isAuthenticated,getRideStatus);
router.get("/get-matched-transporter",isAuthenticated,getMatchedTransporter);
