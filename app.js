const express = require("express");
const app = express();
const api = require("./api/v1/index");
const apiProjet = require("./api/v1/api_projet");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const connection = mongoose.connection;

// Configuration du port ou 3000 s'il n'yen a pas
app.set("port", (process.env.port || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors()); // Clients externes peuvent requêter sur notre serveur Express

// localhost:3000/api/v1
app.use("/api/v1", api);
app.use("/api/v1", apiProjet);

// Requete sur une url inconnue entraine une erreur sur Postman
app.use((req, res) => {
  const err = new Error();
  err.status = 404;
  err.message = " 404 not found";
  res.json({
    erreur : err
  });
});

mongoose.connect("mongodb://localhost:27017/Wefinup", {useNewUrlParser : true});
connection.on("error", (err) =>{
  console.error(`connection to MongoDB error : ${err.message} `);
});

connection.once("open", () => {
  console.log("Connected to MongoDB");

// Appli écoute sur le port configuré 
app.listen(app.get("port"), () => {
  console.log(`express server listening on port ${app.get("port")}`);
});
});



