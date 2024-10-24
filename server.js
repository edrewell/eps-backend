import express from 'express'
import dotenv from 'dotenv'
import connection from './config/db.js';
import cors from 'cors'

import userRoutes from './routes/userRoutes.js'
import customerRoutes from './routes/customerRoutes.js'
import invoiceRoutes from './routes/invoiceRoutes.js'
import paymentRoutes from './routes/paymentRoutes.js'

import cookieParser from 'cookie-parser';

dotenv.config()

const app = express();
const port = 5000;
connection("mongodb://localhost:27017/eps-admin");

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:3000',  // Your frontend URL
    credentials: true,  // Allow credentials (cookies)
  }));

app.use('/api/user', userRoutes)
app.use('/api/customer', customerRoutes)
app.use('/api/invoice', invoiceRoutes)
app.use('/api/payment', paymentRoutes)


app.get('/', (req, res) => {
    res.send("Hello")
} )




app.listen(port, () => console.log(`Server started on port ${port}`))