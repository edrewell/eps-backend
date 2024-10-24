import Invoice from "./models/invoiceModel.js";
import {readFile} from "node:fs/promises"
import connection from './config/db.js';
import mongoose from "mongoose";


connection("mongodb://localhost:27017/eps-admin");

const file = await readFile('./invoices.json', {encoding:"utf-8"}
)

const fileTojson = JSON.parse(file)

for (const record in fileTojson) {
    try {
        const invoice = await Invoice.create(fileTojson[record])
        console.log(invoice)
    } catch (error) {
        console.log(error)
    }

}

mongoose.connection.close()