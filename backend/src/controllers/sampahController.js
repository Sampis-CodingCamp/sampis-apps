const Sampah = require('../models/Sampah');
const User = require('../models/User');
const Boom = require('@hapi/boom');
const { v2: cloudinary } = require('cloudinary');

const createSampah = async (request, h) => {
  try {
    const { jenis, jumlah, estimasiPoin, metode, lokasi } = request.payload;
    const tanggal = new Date(); // auto-generate tanggal server side

    let fotoUrl = '';
    const fotoFile = request.payload.foto;

    if (fotoFile && fotoFile._data) {
      const uploadResult = await cloudinary.uploader.upload_stream(
        {
          folder: 'sampah',
          resource_type: 'image',
        },
        async (error, result) => {
          if (error) {
            throw Boom.badRequest('Gagal upload gambar');
          }

          fotoUrl = result.secure_url;

          const newSampah = new Sampah({
            user: request.auth.user.id, // ganti dari .credentials ke .user
            jenis,
            foto: fotoUrl,
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
        }
      );

      // Pipe file ke Cloudinary
      fotoFile.pipe(uploadResult);
    } else {
      throw Boom.badRequest('Foto tidak ditemukan');
    }
  } catch (err) {
    console.error(err);
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
    if (status === 'approved') {
      await User.findByIdAndUpdate(sampah.user, { $inc: { poin: sampah.estimasiPoin } });
    }
    return h.response({ status: 'success', data: sampah });
  } catch (err) {
    throw Boom.badImplementation(err);
  }
};

module.exports = { createSampah, listUserSampah, listAllSampah, updateStatusSampah }; 