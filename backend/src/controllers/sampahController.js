const Sampah = require('../models/Sampah');
const User = require('../models/User');
const Boom = require('@hapi/boom');
const streamifier = require('streamifier');
const { v2: cloudinary } = require('cloudinary');

const createSampah = async (request, h) => {
  try {
    const { jenis, jumlah, estimasiPoin, metode, lokasi } = request.payload;
    const tanggal = new Date(); 
    const fotoFile = request.payload.foto;

    if (!fotoFile || !fotoFile._data) {
      throw Boom.badRequest('Foto tidak ditemukan');
    }

    // Bungkus upload_stream dalam Promise
    const uploadToCloudinary = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: 'sampah',
            resource_type: 'image',
          },
          (error, result) => {
            if (error) return reject(Boom.badRequest('Gagal upload gambar'));
            resolve(result);
          }
        );

        streamifier.createReadStream(fotoFile._data).pipe(stream);
      });
    };

    const uploadResult = await uploadToCloudinary();

    const newSampah = new Sampah({
      user: request.auth.user.id,
      jenis,
      foto: uploadResult.secure_url,
      jumlah,
      estimasiPoin,
      metode,
      lokasi,
      tanggal,
    });

    await newSampah.save();

    return h.response({
      status: 'success',
      message: 'Sampah berhasil dikirim',
      data: newSampah,
    }).code(201);

  } catch (err) {
    console.error(err);
    if (Boom.isBoom(err)) throw err;
    throw Boom.badImplementation('Gagal membuat data sampah');
  }
};



const listUserSampah = async (request, h) => {
  try {
    const data = await Sampah.find({ user: request.auth.user.id });
    return h.response({ status: 'success', data });
  } catch (err) {
    throw Boom.badImplementation(err);
  }
};

const listAllSampah = async (request, h) => {
  try {
    const data = await Sampah.find().populate('user', 'username email');
    return h.response({ status: 'success', data });
  } catch (err) {
    throw Boom.badImplementation(err);
  }
};

const updateStatusSampah = async (request, h) => {
  try {
    const { id } = request.params;
    const { status } = request.payload;
    const sampah = await Sampah.findByIdAndUpdate(id, { status }, { new: true });
    if (!sampah) throw Boom.notFound('Data sampah tidak ditemukan');
    // Jika status approved, tambahkan poin ke user
    console.log("📦 Sampah data:", sampah);
    console.log("👤 User ID:", sampah.user);
    console.log("💰 Estimasi Poin:", sampah.estimasiPoin);
    if (status === 'approved') {
      const updatedUser = await User.findByIdAndUpdate(sampah.user, { $inc: { poin: sampah.estimasiPoin } }, { new: true });
console.log("✅ User updated:", updatedUser);
console.log("🎯 New user points:", updatedUser?.poin);

    }
    return h.response({ status: 'success', data: sampah });
  } catch (err) {
    throw Boom.badImplementation(err);
  }
};

module.exports = { createSampah, listUserSampah, listAllSampah, updateStatusSampah }; 