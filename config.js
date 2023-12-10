const sql = require('mssql');

const config = {
  server: 'hadasim.database.windows.net',
  database: 'bamastore',
  user: 'Hadasim',
  password: 'Bamas123!',
  options: {
    encrypt: true,
  },
};

module.exports = config;

  