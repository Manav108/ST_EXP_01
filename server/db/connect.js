const mysql = require('mysql2');

// Establish the database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dbsmschool',
});

db.connect(error => {
    if (error) {
        console.log(error.message)
        console.log('Error connecting to the database');
    } else {
        console.log('Successfully connected to the database');
    }
});

module.exports = db;
