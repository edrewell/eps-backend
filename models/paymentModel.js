import mongoose from "mongoose";

const { Schema, model } = mongoose;

const paymentSchema = new Schema(
  {
    invoiceID: {
      type: Schema.ObjectId,
    },
    amount: {
      type: Number,
      required: true,
    },
    dateReceived: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Payment = model("Payment", paymentSchema);

export default Payment;
