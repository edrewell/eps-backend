import mongoose from "mongoose";

const {Schema} = mongoose;

const paymentSchema = new Schema({
    invoiceID : {
        type: Schema.ObjectId,
    },
    amount : {
        type: Number,
        required: true
    },
    dateReceived: {
        type: Date,
        required: true 
    }
})



const Payment = mongoose.Schema("Payment", paymentSchema)

export default Payments