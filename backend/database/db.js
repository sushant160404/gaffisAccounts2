const mysql = require("mysql2");

console.log("🔍 Database Configuration:");
console.log("  Host:", process.env.DB_HOST);
console.log("  User:", process.env.DB_USER);
console.log("  Database:", process.env.DB_NAME);
console.log("  Password:", process.env.DB_PASS ? "***" : "(empty)");

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "gaffis_pulse",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test connection
db.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("❌ Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("❌ Database has too many connections.");
    }
    if (err.code === "ER_AUTHENTICATION_USER") {
      console.error("❌ Database authentication failed.");
    }
    if (err.code === "ER_ACCESS_DENIED_ERROR") {
      console.error("❌ Database access denied - check username/password.");
    }
    if (err.code === "ER_BAD_DB_ERROR") {
      console.error("❌ Database does not exist.");
    }
    console.error("Error connecting to database:", err.message);
  } else {
    console.log("✅ Database connection successful!");
    connection.release();
  }
});

module.exports = db;
