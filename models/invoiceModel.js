import mongoose from "mongoose";

const { Schema } = mongoose;

const invoiceItems = new Schema({
  invoiceItemDescription: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  value: {
    type: Number,
  },
  total: {
    type: Number
  },
  date: {
    type: Date,
  },
});

const invoiceSchema = new Schema({
  dueDate: {
    type: Date,
    required: true,
  },
  issuedDate: {
    type: Date,
    required: true,
  },
  invoiceNumber: {
    type: Number,
    required: true,
  },
  customerID: {
    type: mongoose.Schema.ObjectId,
  },
  invoiceItems: [invoiceItems],
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
