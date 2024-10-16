import Invoice from "../models/invoiceModel.js";
import Customer from "../models/customerModel.js";

// Create Invoice
export const createInvoice = async (req, res) => {
  try {
    const customer = await Customer.findById(req.body.customerID);
    if (!customer) {
      res.status(400).json({ msg: "No customer, cannot create invoice" });
    } else {
      // Set due date
      let dueDate = new Date();
      let invoiceTerms = customer.customerInvoiceTerms;
      dueDate.setDate(dueDate.getDate() + invoiceTerms);

      // Grab the highest invoice number if one exists and create the invoice number based on this
      let invoiceNumber = 0;

      let maxInvoiceNumber = await Invoice.find()
        .sort("-invoiceNumber")
        .select("invoiceNumber");
        
      if (maxInvoiceNumber.length === 0) {
        invoiceNumber = 10001;
        console.log("No max invoice");
      } else {
        maxInvoiceNumber = maxInvoiceNumber[0].invoiceNumber
        invoiceNumber = maxInvoiceNumber + 1;
      }

      let invoiceItems = JSON.parse(req.body.invoiceItems);

      const newInvoice = await Invoice.create({
        dueDate: dueDate,
        issuedDate: new Date(),
        invoiceNumber: invoiceNumber,
        customerID: customer._id,
        invoiceItems: invoiceItems,
      });

      res.status(200).json(newInvoice);
    }
  } catch (error) {
    console.log(error);
    res.end();
  }
};

// Delete Invoice


// Get Invoice

export const getInvoice = async (req, res,) => {
    try {
        const invoice = await Invoice.findById(req.body.invoiceID)
        if(!invoice) {
            res.status(404).json({msg: "Invoice no available"})
        } else {
            res.status(400).json(invoice)
        }
    } catch (error) {
        res.status(400).json({msg: "Could not retrieve invoice"})
        console.log(error)
    }
}