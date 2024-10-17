import Invoice from "./models/invoiceModel.js";
import {readFile} from "node:fs/promises"
import connection from './config/db.js';
import mongoose from "mongoose";

connection("mongodb://localhost:27017/eps-admin");

const invoices = await Invoice.find()

for (const invoice in invoices) {
    let inv = invoices[invoice]
    let invTotal = 0 
     for (const invoiceItem in inv.invoiceItems) {
        invTotal += inv.invoiceItems[invoiceItem].total
     }
     let toUpdate = Number(invTotal.toFixed(2))
     await Invoice.findByIdAndUpdate(invoices[invoice]._id, {total: toUpdate})

}

mongoose.connection.close()