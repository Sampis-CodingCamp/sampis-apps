const mongoose = require('mongoose');

const penukaranPoinSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  foto: { type: String, required: true },
  namaItem: {type: String, require: true},
  
  namaPenerima: {type: String, require: true},
  jumlah: { type: Number, required: true },
  telp: {type:Number, required: true},
  alamat: {type:String, require:true},
  status: { type: String, enum: ['pending', 'approved', 'cancel'], default: 'pending' },
  tanggal: { type: Date, default: Date.now },
});

const PenukaranPoin = mongoose.model('PenukaranPoin', penukaranPoinSchema);
module.exports = PenukaranPoin; 