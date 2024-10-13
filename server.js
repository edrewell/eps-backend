import express from 'express'
import dotenv from 'dotenv'
import connection from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import customerRoutes from './routes/customerRoutes.js'
import cookieParser from 'cookie-parser';

dotenv.config()

const app = express();
const port = 5000;
connection("mongodb://localhost:27017/eps-admin");

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/api/user', userRoutes)
app.use('/api/customer', customerRoutes)


app.get('/', (req, res) => {
    res.send("Hello")
} )




app.listen(port, () => console.log(`Server started on port ${port}`))