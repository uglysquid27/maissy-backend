require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: null,
    database: "meeting_calendar_aio",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  aioEmployee: {
    username: "iot_prod",
    password: "123456",
    database: "aio_employee",
    host: "192.168.9.47",
    port: "3306",
    dialect: "mysql",
  },
  mris: {
    username: "root",
    password: null,
    database: "mris",
    host: "127.0.0.1",
    port: "3306",
    dialect: "mysql",
    timezone: "+07:00",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
