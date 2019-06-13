const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({

    action : String,
    Affichage : Boolean,
    bouton_1 : String,
    bouton_2 : String,
    Lu : Boolean,
    message : String,
    superviseur : String,
    titre : String,
    type : String,
    user : User,

    dateDeFinancement : { type : Date, default : Date.now}

});

module.exports = mongoose.model("Notification", notificationSchema);
