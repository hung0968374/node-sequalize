const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: `${process.env.ACCESS_TOKEN_LIFETIME}s`,
  });
}
function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: `${process.env.REFRESH_TOKEN_LIFETIME}s`,
  });
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
