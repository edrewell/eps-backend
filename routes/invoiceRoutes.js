import express from "express";

import protect from "../middleware/protect.js";

import { createInvoice, getInvoice, getInvoicesByCustomerID } from "../controllers/invoiceController.js";

const router = express.Router()

// POST
router.route('/create').post(protect, createInvoice)

// GET
router.route('/getbyid/:customerid').get(protect, getInvoice)
router.route('/getbycustomer').get(protect, getInvoicesByCustomerID)

export default router