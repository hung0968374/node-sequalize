module.exports = {
  HOST: "mysql-75358-0.cloudclusters.net",
  USER: "hung",
  PASSWORD: "11111111",
  DB: "fpt",
  PORT: 10678,
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
