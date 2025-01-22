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

// Middleware globaux
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
const PORT = process.env.PORT || 3000;

// les fichiers importer pour les routes
const UserRoute = require("./routes/UserRoutes");
const FraisRoutes = require("./routes/FraisRoutes");
const CinetpayRoutes = require("./routes/CinetpayRoutes");

// LES ROUTES
app.use("/api/v1/user", UserRoute); // Version1 api User
app.use("/api/v2/datafrias", FraisRoutes);
app.use("/api/v3/datacinetpay", CinetpayRoutes);


// open server
server.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
