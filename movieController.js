const Movie = require('./movieModel')

const checkSystem = async (req, res) => {
    try {
        res.status(200).json({ success: true, data: 'Server is running!!!' })
    }
    catch (error) {
        res.status(500).json({ success: false, data: [], error: error })
    }
}

const addMovie = async (req, res) => {
    try {
        const newMovie = new Movie({
            name: req.body.name,
            releaseDate: req.body.releaseDate,
            cast: req.body.cast
        })
        const saved = await newMovie.save()
        res.status(200).json({ success: true, data: saved })
    }
    catch (error) {
        res.status(500).json({ success: false, data: [], error: error })
    }
}

const showMovies = async (req, res) => {
    const saved = await Movie.find()
    res.status(200).json({ success: true, data: saved })
}

const showMovie = async (req, res) => {
    try {
        const id = req.body.id
        const saved = await Movie.find({ _id: id })
        res.status(200).json({ success: true, data: saved })
    }
    catch (err) {
        res.status(500).json({ success: false, data: [] })
    }
}

const removeMovie = async (req, res) => {
    try {
        const id = req.body.id
        const da = await Movie.deleteOne({ _id: id })
        if (da.deletedCount > 0) {
            res.status(200).json({ success: true, data: { msg: 'Data Removed' } })
        } else {
            res.status(200).json({ success: true, data: { msg: 'something went wrong' } })
        }
    }
    catch (err) {
        res.status(500).json({ success: false, data: [] })
    }
}

const updateMovie = async (req, res) => {
    try {
        const id = req.body.id
        const da = {
            name: req.body.name,
            cast: req.body.cast
        }
        const saved = await Movie.updateOne({ _id: id }, {
            $set: da
        })
        res.status(200).json({ success: true, data: saved })
    }
    catch (error) {
        res.status(500).json({ success: false, data: [], error: error })
    }
}

module.exports = { checkSystem, addMovie, showMovies, showMovie, removeMovie, updateMovie }; 