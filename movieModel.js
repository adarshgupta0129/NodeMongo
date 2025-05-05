const mongoose = require('mongoose')

const Movie = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        default:null
    },
    releaseDate:{
        type: Date,
        require:true,
        default:Date.now
    },
    cast:{
        type:String,
        require:true,
        default:null
    },
    crew:{
        type:String,
        require:true,
        default:null
    }
})

module.exports = mongoose.model("Movie", Movie)