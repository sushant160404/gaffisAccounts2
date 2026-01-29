require("dotenv").config({ path: __dirname + "/.env" });

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();

/* =========================
   CORS (cPanel + Local)
========================= */
app.use(
  cors({
    origin: [
      "https://gaffis.in",
      "https://www.gaffis.in",
      "http://localhost:3000",
      "http://157.173.218.30:3000/"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

/* =========================
   Middleware
========================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =========================
   Health Check (REQUIRED)
========================= */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is running successfully"
  });
});

/* =========================
   Routes
========================= */
app.use("/api/auth", authRoutes);

/* =========================
   Global Error Handler
========================= */
app.use((err, req, res, next) => {
  console.error("Backend Error:", err.message);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

/* =========================
   Server Start (cPanel)
========================= */
const PORT = process.env.PORT;

if (!PORT) {
  throw new Error("PORT is not defined. cPanel requires process.env.PORT");
}

app.listen(PORT, () => {
  console.log("Backend server started successfully");
});
