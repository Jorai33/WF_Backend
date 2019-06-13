const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    // Action : Action,
    admin_commentaire_document : String,
    admin_commentaire_identite : String,
    admin_notif_tableau_de_bord : String,
    adresse : String,
    affichageNotifComptes : Boolean,
    affichageNotifDoc : Boolean,
    affichageNotifLastStriaghtLine : Boolean,
    authy_id : String,
    avatar : Image,
    Bi : User-Bi,
    code_postale : Number,
    commentaire : Commentaire,
    date_comm_admin_identite : Date,
    date_inscription : Date,
    document : Document,
    Entr_adr_codeetville : String,
    Entr_adr_pays : String,
    Entr_adr_rue : String,
    Entr_dcren : String,
    Entr_denom_comerciale : String,
    Entr_forme_juridique : String,
    Entr_log_comptable : String,
    Entr_siren : Number,
    Entr_siret : Number,
    etat_inscription : String,
    faq_paragraphe : FAQ_paragraphe,
    genre : String,
    isAdmin : Boolean,
    mail_a_envoyer : Boolean,
    nom : String,
    notification : Notification,
    phone : String,
    prenom : String,
    project : Project,
    scoring_client : Number,
    Solution_Projet : Solution_Projet,
    Solution_up : Solution_UP,
    temps_activite : Number,
    User_document : User_Document,
    ville : String,

    dateDeFinancement : { type : Date, default : Date.now}

});

module.exports = mongoose.model("User", userSchema);
