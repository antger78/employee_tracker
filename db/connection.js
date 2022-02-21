const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'INSERT YOUR PASSWORD HERE',
  database: 'business_database'
});

module.exports = db;