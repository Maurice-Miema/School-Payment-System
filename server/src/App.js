const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const http = require("http");
const db = require("./config/Database");
const {initializeSocket} = require("./config/Socket");

const app = express();
const server = http.createServer(app)
initializeSocket(server);
dotenv.config();

const PORT = process.env.PORT || 4000;

// les fichiers importer pour les routes
const UserRoute = require("./routes/UserRoutes");
const FraisRoutes = require("./routes/FraisRoutes");
const StripeRoutes = require("./routes/StripeRoutes");

app.use("/api/v3/PaymentStripe/stripewebhook", express.raw({ type: "application/json" }));

// Middleware globaux
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  res.setHeader("Surrogate-Control", "no-store");
  next();
});


// LES ROUTES
app.use("/api/v1/user", UserRoute); // Version1 api User
app.use("/api/v2/datafrias", FraisRoutes);
app.use("/api/v3/PaymentStripe", StripeRoutes);


// open server
server.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
