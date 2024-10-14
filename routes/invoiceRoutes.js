import express from "express";

import protect from "../middleware/protect.js";

import { createInvoice } from "../controllers/invoiceController.js";

const router = express.Router()

router.route('/create').post(protect, createInvoice)

export default router