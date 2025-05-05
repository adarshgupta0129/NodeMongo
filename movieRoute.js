const express = require('express')
const {checkDB, addMovie, showMovies, showMovie, removeMovie, updateMovie} = require("./movieController");

router = express.Router()
router.use(express.json()); 

router.get("/", checkDB)
router.post("/add", addMovie)
router.get("/showAll", showMovies)
router.post("/showOne", showMovie)
router.post("/remove", removeMovie)
router.post("/update", updateMovie)

module.exports = router