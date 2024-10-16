import express from "express";

import protect from "../middleware/protect.js";

import { createInvoice, getInvoice } from "../controllers/invoiceController.js";

const router = express.Router()

// POST
router.route('/create').post(protect, createInvoice)

// GET
router.route('/get').get(protect, getInvoice)

export default router