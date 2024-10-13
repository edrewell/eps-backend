import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }, 
    email: {
      type: String,
      required: true,
    },
    businessAddress: {
      businessAddressBuildingNumber: {
        type: String
      },
      businessAddressBuildingFirstLine: {
        type: String
      },
      businessAddressBuildingSecondLine: {
        type: String
      },
      businessAddressBuildingTown: {
        type: String
      },
      businessAddressBuildingCounty: {
        type: String
      },
      businessAddressBuildingPostcode: {
        type: String
      }
    },
    businessName: {
      type: String
    },
    businessCompanyNumber: {
      type: Number
    },

  },
  { timestamps: true }
);

userSchema.methods.matchPasswords = async function (enteredPassword) {

  return await bcrypt.compare(enteredPassword, this.password);
};

// Hash password before save

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(process.env.BCRYPT_SALT_ROUNDS);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
