import express from "express"
import protect from "../middleware/protect.js"

const router = express.Router()

 router.route('/create').post(protect)