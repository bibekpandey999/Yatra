import { Router } from "express";
import { registerTransporter, loginTransporter, logout, submitKyc, getTransporterProfile,
     changeTransporterPassword,
 } from "../controllers/TransporterController.js";

import isAuthenticated from "../middleware/isAuthenticated.js";

const router = Router();

router.post("/register",registerTransporter);
router.post("/login",loginTransporter);
router.post("/logout",logout);
router.get("/get-profile",isAuthenticated, getTransporterProfile);
router.post("/change-password",isAuthenticated, changeTransporterPassword);
router.post("/submit-kyc",isAuthenticated,submitKyc);