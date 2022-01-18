const mongoose = require ('mongoose')
const {Schema} = mongoose

const mobilSchema = new Schema ({
    jns_mobil: String,
    nm_mobil: String,
    // harga: String,
    password: String,
    img: {
        data: Buffer, contentType: String
    },
}, {timestamps: true})

const Mobil = mongoose.model('Mobil', mobilSchema)
module.exports = Mobil