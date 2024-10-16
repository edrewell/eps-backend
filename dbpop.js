import Invoice from "./models/invoiceModel.js";
import {readFile} from "node:fs/promises"
import connection from './config/db.js';

connection("mongodb://localhost:27017/eps-admin");

const invocies = await readFile('./invoices2.json', {encoding:"utf-8"})

const invoicesJson = JSON.parse(invocies)


for (const inv in invoicesJson) {
    await Invoice.create(invoicesJson[inv])
    
}

process.exit(1)