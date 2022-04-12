const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const db = require("../models");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../helpers/index");

const User = db.users;

const getAllUsers = async (req, res) => {
  let users = await User.findAll({});
  res.status(200).send({ users, totalUsers: users.length });
};

const createUser = async (req, res) => {
  const username = req.body.username;
  const userWithRequestUsername = await User.findOne({
    where: { username: username },
  });
  if (userWithRequestUsername) {
    res.status(400).send({ msg: "This username has already been taken" });
  } else {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = { username: req.body.username, password: hashedPassword };
      const newCreatedUser = await User.create(user);
      res.status(201).send({ newCreatedUser });
    } catch {
      res.status(500).send();
    }
  }
};

const login = async (req, res) => {
  const username = req.body.username;
  const userWithRequestUsername = await User.findOne({
    where: { username: username },
  });
  if (userWithRequestUsername == null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    if (
      await bcrypt.compare(req.body.password, userWithRequestUsername.password)
    ) {
      const accessToken = generateAccessToken({
        username,
        role: userWithRequestUsername.role,
      });
      const refreshToken = generateRefreshToken({
        username,
        role: userWithRequestUsername.role,
      });
      const tokens = {
        access: {
          token: accessToken,
          expireIn: process.env.ACCESS_TOKEN_LIFETIME,
        },
        refreshToken: {
          token: refreshToken,
          expireIn: process.env.REFRESH_TOKEN_LIFETIME,
        },
      };
      res.status(201).send({ msg: "success", tokens, userWithRequestUsername });
    } else {
      return res.status(400).send({ msg: "Username or password is wrong!" });
    }
  } catch {
    res.status(500).send();
  }
};

const refreshToken = async (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (refreshToken == null) return res.sendStatus(401);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({
      username: user.username,
      role: user.role,
    });
    res.json({ accessToken: accessToken });
  });
};

module.exports = {
  getAllUsers,
  createUser,
  login,
  refreshToken,
};
