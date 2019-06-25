const mongoose = require("mongoose");

const projetSchema = new mongoose.Schema({
  nom: String,
  etatProjet: String,
  montantDemande: Number,
  image: String,
  besoinsClient: String,
  siren: Number,
  nomEntreprise: String,
  adresseEntreprise: String,
  codePostalEntreprise: String,
  villeEntreprise: String,
  nomDirigeant: String,
  prenomDirigeant: String,
  adresse : String,
  codePostal: String,
  ville: String,
  email : String,
  telephone: Number,
  dateDemandeFinancement: {type : Date, default: Date.now }

});


module.exports = mongoose.model("Projet", projetSchema);