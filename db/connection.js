// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Bootcamp2021!',
    database: 'election'
  });

  module.exports = db;