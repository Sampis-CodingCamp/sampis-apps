const mongoose = require('mongoose');

const artikelSchema = new mongoose.Schema({
  judul: { type: String, required: true },
  foto: { type: String, required: true },
  isi: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tanggal: { type: Date, required: true },
  sumber: { type: String, required: true, default:'Admin' },
  createdAt: { type: Date, default: Date.now }
});

const Artikel = mongoose.model('Artikel', artikelSchema);
module.exports = Artikel; 