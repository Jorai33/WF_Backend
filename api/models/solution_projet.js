const mongoose = require ("mongoose");

const solution_projetSchema = new mongoose.Schema({

    besoins_identifies : String,
    etat_solution_projet : String,
    projet : Project,
    solution_proposee : String,
    user : User,

    dateDeFinancement : { type : Date, default : Date.now}

});

module.exports = mongoose.model("Solution_Projet", solution_projetSchema);
