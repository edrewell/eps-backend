import express from "express"
import protect from "../middleware/protect.js"
import { createPayment } from "../controllers/paymentController.js"

const router = express.Router()

 router.route('/create').post(protect, createPayment)

 
 export default router