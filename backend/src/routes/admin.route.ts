import { Router } from "express";
import {
    registerAdmin, loginAdmin, logout, getAdminProfile,
    updateAdminProfile, changeAdminPassword, getAllTransportProviders, deleteTransportProvider,
    getTransportProviderById, verifyTransportProviderKYC, rejectTransportProviderKYC, blockUnBlockTransportProvider, getPendingKYCProviders,
    getBlockedTransportProviders, getAllCustomers, getCustomerById, blockUnBlockCustomer, deleteCustomer
} from "../controllers/AdminController.js";

import isAuthenticated from "../middleware/isAuthenticated.js";
import isAdmin from "../middleware/isAdmin.js";
const router = Router();

router.post("/add-admin", registerAdmin);
router.post("/enter-admin", loginAdmin);
router.post("/logout", logout);
router.get("/get-profile", isAuthenticated, isAdmin, getAdminProfile);
router.post("/update-profile", isAuthenticated, isAdmin, updateAdminProfile);
router.post("/change-password", isAuthenticated, isAdmin, changeAdminPassword);

router.get("/transport-providers", isAuthenticated, isAdmin, getAllTransportProviders);
router.get("/transport-provider/:id", isAuthenticated, isAdmin, getTransportProviderById);
router.get("/transport-providers/pending-kyc", isAuthenticated, isAdmin, getPendingKYCProviders);
router.get("/transport-providers/blocked", isAuthenticated, isAdmin, getBlockedTransportProviders);

router.patch("/transport-provider/:id/verify-kyc", isAuthenticated, isAdmin, verifyTransportProviderKYC);
router.patch("/transport-provider/:id/reject-kyc", isAuthenticated, isAdmin, rejectTransportProviderKYC);
router.patch("/transport-provider/:id/block-unblock", isAuthenticated, isAdmin, blockUnBlockTransportProvider);
router.delete("/transport-provider/:id", isAuthenticated, isAdmin, deleteTransportProvider);

router.get("/customers", isAuthenticated, isAdmin, getAllCustomers);
router.get("/customer/:id", isAuthenticated, isAdmin, getCustomerById);
router.patch("/customer/:id/block-unblock", isAuthenticated, isAdmin, blockUnBlockCustomer);
router.delete("/customer/:id", isAuthenticated, isAdmin, deleteCustomer);



export default router;
