
const express = require("express");
const router = express.Router();
const Projet = require("../models/projet");




router.get("/projets", (req, res) => {
	Projet.find()
		.sort({ "dateDemandeFinancement": -1 })
		.exec()
		.then(projets => res.status(200).json(projets))
		.catch(err => res.status(500).json({
			message: "Pas de projets trouvés",
			erreur: err
		}));
});

router.post("/projets", (req, res) => {
	console.log("req.body", req.body);
	const projet = new Projet(req.body);

	projet.save((err, projet) => {
		if (err) {
			return res.status(500).json(err);
		}
		res.status(201).json(projet);
	});
});

router.get("/projets/:id", (req, res) => {
	const id = req.params.id;
	Projet.findById(id)
		.then(projet => res.status(200).json(projet))
		.catch(err => res.status(500).json({
			message: `Projet with id ${id} not found`,
			erreur: err
		}));
});

router.delete("/projets/:id", (req, res)=> {
	const id = req.params.id;
	Projet.findByIdAndDelete(id, (err, projet) => {
		if(err){
			return res.status(500).json(err);
		}
		res.status(202).json({
			message : `Projet with id ${projet._id} deleted`
		});
	});
});

module.exports = router;