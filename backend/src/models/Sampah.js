const mongoose = require("mongoose");

const sampahSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  jenis: { type: String, required: true },
  foto: { type: String, required: true }, // URL atau base64
  jumlah: { type: Number, required: true },
  estimasiPoin: { type: Number, required: true },
  metode: { type: String, enum: ["Diantar", "Dijemput"], required: true },
  lokasi: { type: String, required: true },
  tanggal: { type: Date, required: true },
  status: {
    type: String,
    enum: ["Menunggu", "Diterima", "Dibatalkan"],
    default: "Menunggu",
  },
  createdAt: { type: Date, default: Date.now },
});

const Sampah = mongoose.model("Sampah", sampahSchema);
module.exports = Sampah;
