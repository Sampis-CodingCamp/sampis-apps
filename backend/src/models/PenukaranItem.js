const mongoose = require('mongoose')

const penukaranItemSchema = new mongoose.Schema({
    nama: {type: String, require: true},
    foto: {type:String, require: true},
    deskripsi: {type: String, require: true},
    poin: {type: Number, require: true},
    jenis: {type: String, require: true},
    stok: {type: Number, require: true, default: 1},
    tanggal: { type: Date, default: Date.now }
})

const PenukaranItem = mongoose.model('PenukaranItem', penukaranItemSchema);
module.exports = PenukaranItem;