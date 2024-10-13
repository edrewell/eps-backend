import express from 'express'
import protect from '../middleware/protect.js';
import { createUser, authUser, logoutUser, getUser, updateUser } from "../controllers/userController.js";

const router = express.Router()

router.post('/register', createUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router.route('/profile').get(protect, getUser)
router.route('/update').post(protect, updateUser)

export default router


