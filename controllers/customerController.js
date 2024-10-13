import Customer from "../models/customerModel.js"

// Get all customers name & ID

export const getCustomers = async(req, res) => {
    try {
        const customers = await Customer.find({}, "_id displayName")
        res.status(200).json(customers)
    } catch (error) {
        res.status(400).json({msg:"Could not retrieve customers"})
        console.error(error)
    }

}

// Get customers by filter

export const getCustomersByFilter = async(req, res) => {
    try {
        
        const expression = new RegExp(`${req.body.customerFilterValue}`, "i")
        console.log(expression)
                                               
        const customers = await Customer.find({[req.body.customerFilterQuery]:expression})
        
        if(!customers) {
            res.status(200).json({msg: "No search results"})
        } else {
            res.status(200).json({customers})
        }

    } catch (error) {
        res.status(400).json({msg:"Could not retrieve customers"})
        console.log(error)
    }
}

// Get customer by ID

export const getCustomerByID = async(req, res) => {
    try {
        const customer = await Customer.findById(req.body.customerid)
        if (!customer) {
            res.status(404).json({msg: "Customer not found"})
        } else {
            res.status(200).json(customer)
        }

    } catch (error) {
        res.status(400).json({msg:"Could not get Customer"})
        console.error(error)
        
    }
}

// Create a new customer

export const createCustomer = async(req, res) => {
    try {
        const customer = await Customer.create(req.body)
        res.status(200).json({msg:"Customer created"})
    } catch (error) {
        console.error(error)        
        res.status(400).json({msg:"Error creating customer"})
    }
}

// Update a customer

export const updateCustomer = async(req, res) => {
    try {
        const customer = await Customer.findById(req.body.id)
        if (!customer) {
            res.status(400).json({msg:"Customer not found"})
        } else {
            await Customer.findByIdAndUpdate()
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "Could not update customer"})
    }
}