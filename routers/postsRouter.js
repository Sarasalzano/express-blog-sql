// importo il modulo Express
const express = require("express");
// creo un’istanza del router
const router = express.Router();
//import controller
const postController = require("../controllers/postController");

// index: restituisce la lista dei post
router.get("/", postController.index);

// show: restituisce i dettagli di un singolo post in base all'id
router.get('/:id', postController.show);

// store: crea un nuovo post
router.post("/", postController.store);

// update: aggiorna un post esistente con PUT
router.put("/:id", postController.update);

// modify: modifica parziale di un post con PATCH
router.patch("/:id", postController.modify);

// destroy: elimina un post in base all'id
router.delete("/:id", postController.destroy) 

// esporta il router per poterlo usare in app.js
module.exports = router;