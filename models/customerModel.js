import mongoose from "mongoose";

const {Schema} = mongoose;

const customerSchema = new Schema(
    {
        displayName: {
          type: String,
          required: true,
        },
        title: {
            type: String
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        email: {
          type: String,
        },
        customerBusinessAddress: {
            customerBusinessAddressBuildingNumber: {
            type: String
          },
          customerBusinessAddressBuildingFirstLine: {
            type: String
          },
          customerBusinessAddressBuildingSecondLine: {
            type: String
          },
          customerBusinessAddressBuildingTown: {
            type: String
          },
          customerBusinessAddressCounty: {
            type: String
          },
          customerBusinessAddressBuildingPostcode: {
            type: String
          }
        },
        customerBusinessName: {
          type: String
        },
        customerBusinessCompanyNumber: {
          type: Number
        },
        customerInvoiceTerms: {
            type: Number
        }
    
      },
      { timestamps: true }
)

const Customer = mongoose.model("Customer", customerSchema)

export default Customer