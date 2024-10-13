import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protect = async (req, res, next) => {
  if (!req.cookies.jwt) {
    res.status(400).json({ msg: "no user token" });
  } else {
    try {
      req.user = await User.findById(
        jwt.decode(req.cookies.jwt, process.env.JWT_SECRET).userId
      ).select("-password");
      next();
    } catch (error) {
      res.status(400).json({ msg: "Token Invalid" });
      console.error(error);
    }
  }
};

export default protect;
