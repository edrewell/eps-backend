import express from "express"
import protect from "../middleware/protect.js"
import { createPayment, getPaymentsFromCustomerId, getPaymentsByDate } from "../controllers/paymentController.js"

const router = express.Router()

 router.route('/create').post(protect, createPayment)
 router.route('/paymentsfromcustomerid').get(protect, getPaymentsFromCustomerId)
 router.route('/getbydaterange').post(protect, getPaymentsByDate)

 
 export default router