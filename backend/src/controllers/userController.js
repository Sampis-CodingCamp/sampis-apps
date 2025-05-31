const User = require('../models/User');
const Boom = require('@hapi/boom');
const streamifier = require('streamifier');
const { v2: cloudinary } = require('cloudinary');
const Sampah = require('../models/Sampah');
const Artikel = require('../models/Artikel');

const getProfile = async (request, h) => {
  try {
    const user = await User.findById(request.auth.user.id).select('-password');
    if (!user) throw Boom.notFound('User tidak ditemukan');
    return h.response({ status: 'success', data: user });
  } catch (err) {
    throw Boom.badImplementation(err);
  }
};

const updateProfile = async (request, h) => {
  try {
    const { username, email, phone, address } = request.payload;
    const updateData = { username, email, phone };

    if (address) {
      try {
        updateData.address = JSON.parse(address);
      } catch (err) {
        throw Boom.badRequest('Format address tidak valid');
      }
    }

    const fotoFile = request.payload.foto;

    if (fotoFile && fotoFile._data) {
      // Upload foto ke Cloudinary
      const uploadToCloudinary = () => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              folder: 'user_profile',
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
      updateData.foto = uploadResult.secure_url; // Simpan URL foto dari Cloudinary
    }

    const user = await User.findByIdAndUpdate(
      request.auth.user.id,
      updateData,
      { new: true, runValidators: true, context: 'query' }
    ).select('-password');

    if (!user) throw Boom.notFound('User tidak ditemukan');

    return h.response({ success: true, message: 'Profil berhasil diperbarui', data: user });
  } catch (err) {
    console.error(err);
    throw Boom.badImplementation(err);
  }
};

const getAllUsers = async (request, h) => {
  try {
    const users = await User.find().select('-password');
    return h.response({ status: 'success', data: users });
  } catch (err) {
    throw Boom.badImplementation(err);
  }
};

const adminDashboard = async (request, h) => {
  try {
    const trash = await Sampah.find({});
    const user = await User.find({});
    const artikel = await Artikel.find({});

    const dashData = {
      sampah: trash.length,
      user: user.length,
      artikel: artikel.length,
    };

    return h.response({ status: "success", dashData }).code(200);
  } catch (error) {
    console.error("Error in adminDashboard:", error);
    return h.response({ status: "error", message: error.message }).code(500);
  }
};


module.exports = { getProfile, updateProfile, getAllUsers, adminDashboard }; 