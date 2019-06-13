const mongoose = require("mongoose");

const commentaireSchema = new mongoose.Schema({

    fichier : File,
    message : String,
    user : User,

    dateDeFinancement : { type : Date, default : Date.now}

});

module.exports = mongoose.model("Commentaire", commentaireSchema);
