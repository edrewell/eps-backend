import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// Create User

export const createUser = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ Error: "User Exists" });
    } else {
      const user = await User.create({ name, password, email });

      if (user) {
        res.status(200).json({ _id: user._id, name: user.name });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// Auth User and get token

export const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPasswords(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user.id,
      email: user.email,
      name: user.name,
    });
  } else {
    res.status(400).json({ msg: "Incorrect username or password" });
  }
};

// Logout user

export const logoutUser = async (req, res) => {
  try {
    if (req.cookies.jwt) {
      res.clearCookie("jwt").json({ msg: "Logged out" });
    } else {
      res.status(400).json({ msg: "Not logged in" });
    }
  } catch (error) {
    res.status(400).json({ msg: "Not logged in" });
  }
};

// Get user

export const getUser = async (req, res) => {
  res.json(req.user);
};

// Update User

export const updateUser = async (req, res) => {
  try {
    if (Object.hasOwn(req.body, "password")) {
      delete req.body.password
    }
    await User.findByIdAndUpdate(req.user._id, req.body);

    res.status(200).json({ msg: "User updated" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Could not update user" });
  }
};
