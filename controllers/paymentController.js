import Payment from "../models/paymentModel.js";
import Invoice from "../models/invoiceModel.js";
import { json } from "express";

export const createPayment = async (req, res) => {
  try {
    let invoicesArray = JSON.parse(req.body.invoiceIDs);

    const payment = await Payment.create({
      invoiceIDs: invoicesArray,
      customerID: req.body.customerID,
      amount: req.body.amount,
      dateReceived: req.body.dateReceived,
    });

    res.status(200).json({ payment });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: "Could not create payment" });
  }
};

export const getPaymentsFromCustomerId = async (req, res) => {
  try {
    const payments = await Payment.find({ customerID: req.body.customerID });
  } catch (error) {
    res.status(400).json({ msg: "Could not return payment" });
    console.log(error);
  }
};

export const getPaymentsByDate = async (req, res) => {
  try {
    let { dateRangeStart, dateRangeEnd } = req.body;
    console.log(req.body)

    if (!dateRangeStart) {
      res.status(400).json({ msg: "No date range start provided" });
    } else {
      if (!dateRangeEnd) {
        dateRangeEnd = new Date();
      } else {
        dateRangeEnd = new Date(dateRangeEnd);
      }
      const payments = await Payment.find({
        dateReceived: { $gte: dateRangeStart, $lte: dateRangeEnd },
      });

      console.log(payments)
      res.status(200).json(payments)
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Could not return data" });
  }
};
