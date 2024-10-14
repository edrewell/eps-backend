import mongoose from "mongoose";

const {Schema} = mongoose;

const invoiceSchema = new Schema({
    dueDate: {
        type: Date,
        required: true
    },
    invoiceNumber: {
        type: Number,
        required: true
    }
})

const Invoice = mongoose.model("Invoice", invoiceSchema)

export default Invoice