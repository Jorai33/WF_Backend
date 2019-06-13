const mongoose = require("mongoose");

const projetSchema = new mongoose.Schema({
  nom: String,
  etatProjet: String,
  montantDemande: Number,
  image: String,
  dateDemandeFinancement: {type : Date, default: Date.now }

});


module.exports = mongoose.model("Projet", projetSchema);