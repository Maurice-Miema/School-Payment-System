const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const db = require("./config/Database");

const UserRoute = require("./routes/UserRoutes");

const app = express();
dotenv.config();

// Middleware globaux
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

// LES ROUTES
app.use("/api/v1/user", UserRoute); // Version1 api User


// open server
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
