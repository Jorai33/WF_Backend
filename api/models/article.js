const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({

    auteur : String,
    call_to_action : String,
    call_to_action2 : String ,
    contenu : String,
    contenu2 : String,
    couverture : Couverture,
    date_publication : Date,
    image_couverture : Image,
    ouverture : String,
    sous_titre : String,
    sous_titre2 : String, 
    titre : String, 
    video_id : String, 
    video_url : String, 

    dateDeFinancement : { type : Date, default : Date.now}
    
});

module.exports = mongoose.model("Article", articleSchema);
