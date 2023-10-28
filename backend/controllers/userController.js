const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { name, email, password, cnf_password } = req.body;

  if (password !== cnf_password) {
    return res.status(500).send("The two passwords don't match");
  }

  const user = await UserModel.findOne({ email: email });

  if (!user) {
    // Hash password using bcrypt module
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      name: name,
      email: email,
      password: hashPassword,
    });

    const savedUser = newUser.save();
    // create payload then Generate an access token

    const token = jwt.sign({ userId: savedUser._id }, "randomsecret");
    return res.status(200).json({
      user: newUser,
      token: token,
    });
  } else {
    return res.status(500).send("User already exists!");
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email: email });

  if (!user) {
    return res.status(400).send("User does not exist");
  }

  const isPasswordMatchingFromDb = await bcrypt.compare(
    password,
    user.password
  );

  if (isPasswordMatchingFromDb) {
    const token = jwt.sign({ userId: user._id }, "randomsecret");
    return res.status(200).json({
      user: user,
      token: token,
    });
  }

  return res.status(401).send("Incorrect login credentials");
};
module.exports = {
  registerUser,
  loginUser,
};

//
// const UserModel = require("../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const registerUser = async (req, res) => {
//   const { name, email, password, cnf_password } = req.body;

//   if (password !== cnf_password) {
//     return res.status(500).send("The two passwords don't match");
//   }

//   const user = await UserModel.findOne({ email: email });

//   if (!user) {
//     // Hash password using bcrypt module
//     const salt = await bcrypt.genSalt(10);
//     const hashPassword = await bcrypt.hash(password, salt);

//     const newUser = new UserModel({
//       name: name,
//       email: email,
//       password: hashPassword,
//     });

//     const savedUser = newUser.save();
//     // create payload then Generate an access token

//     const token = jwt.sign({ userId: savedUser._id }, "randomsecret");
//     return res.status(200).json({
//       user: newUser,
//       token: token,
//     });
//   } else {
//     return res.status(500).send("User already exists!");
//   }
// };

// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await UserModel.findOne({ email: email });

//   if (!user) {
//     return res.status(400).send("User does not exist");
//   }

//   const isPasswordMatchingFromDb = await bcrypt.compare(
//     password,
//     user.password
//   );

//   if (isPasswordMatchingFromDb) {
//     const token = jwt.sign({ userId: user._id }, "randomsecret");
//     return res.status(200).json({
//       user: user,
//       token: token,
//     });
//   }

//   return res.status(401).send("Incorrect login credentials");
// };

// module.exports = {
//   registerUser,
//   loginUser,
// };
