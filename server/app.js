import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql2";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

/*// Connect to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Aadhi@17",
  database: "movieapp"
}); */

/*const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306
});*/

const db = mysql.createConnection({
  host: b4v5gaaefoxigewykysq-mysql.services.clever-cloud.com,
  user: uuyvlekeykmdbhnm,
  password: rHGMiv08xAhDplrwOQnZ,
  database: b4v5gaaefoxigewykysq,
  port: 3306
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
        return res.status(500).send({ success: false });
      }
      res.send({ success: true, bookingId: result.insertId });
    }
  );
});

//Server listening 
app.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});
