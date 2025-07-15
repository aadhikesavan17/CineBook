/*import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306
});


db.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

// POST /booking
app.post("/booking", (req, res) => {
  const { name, movie_title, showtime, seats, payment_method } = req.body;

  const sql = `
    INSERT INTO bookings ( name, movie_title, showtime, seats, payment_method)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [ name, movie_title, showtime, seats, payment_method],
    (err, result) => {
      if (err) {
        console.error("DB error:", err);
        return res.status(500).send({ success: false});
      }
      res.send({ success: true, bookingId: result.insertId });
    }
  );
}); 



//Server listening 
app.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});
 */


import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// ✅ Auto-reconnecting MySQL connection
let db;

function handleDisconnect() {
  db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
  });

  db.connect((err) => {
    if (err) {
      console.error("❌ DB connection failed. Retrying in 2s...", err);
      setTimeout(handleDisconnect, 2000);
    } else {
      console.log("✅ Connected to MySQL");
    }
  });

  db.on("error", (err) => {
    console.error("⚠️ MySQL error:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

// Start DB connection
handleDisconnect();

// ✅ Root route for Render testing
app.get("/", (req, res) => {
  res.send("🎬 CineBook Backend is Live");
});

// ✅ Booking API
app.post("/booking", (req, res) => {
  const { name, movie_title, showtime, seats, payment_method } = req.body;

  const sql = `
    INSERT INTO bookings (name, movie_title, showtime, seats, payment_method)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, movie_title, showtime, seats, payment_method], (err, result) => {
    if (err) {
      console.error("❌ DB error:", err);
      return res.status(500).send({ success: false, message: "Database error" });
    }
    res.send({ success: true, bookingId: result.insertId });
  });
});

// ✅ Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
