import Payment from "../models/paymentModel.js"


export const createPayment = async (req, res) => {
    try {

        const payment = await Payment.create(req.body)
        res.status(200).json(payment)
    } catch (error) {
        console.error(error)
        res.status(400).json({msg: "Could not create payment"})
        
    }
}