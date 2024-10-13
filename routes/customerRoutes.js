import express from "express";
import protect from "../middleware/protect.js";
import {
  getCustomers,
  createCustomer,
  getCustomerByID,
  getCustomersByFilter,
  updateCustomer,
} from "../controllers/customerController.js";

const router = express.Router();

/** GET */
router.route("/customers").get(protect, getCustomers);
router.route("/getbyid").get(protect, getCustomerByID);
router.route("/getbyfilter").get(protect, getCustomersByFilter);

/** POST */
router.route("/create").post(protect, createCustomer);
router.route("/uodate").post(protect, updateCustomer);

export default router;
