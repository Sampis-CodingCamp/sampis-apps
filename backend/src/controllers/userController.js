const User = require('../models/User');
const Boom = require('@hapi/boom');
const streamifier = require('streamifier');
const { v2: cloudinary } = require('cloudinary');
const Sampah = require('../models/Sampah');
const Artikel = require('../models/Artikel');
const PenukaranItem = require('../models/PenukaranItem');
const PenukaranPoin = require('../models/PenukaranPoin');

const getProfile = async (request, h) => {
  try {
    const user = await User.findById(request.auth.user.id).select('-password');
    if (!user) throw Boom.notFound('User tidak ditemukan');
    
    return h.response({ 
      status: 'success', 
      data: user 
    });
  } catch (err) {
    console.error('Error in getProfile:', err);
    throw Boom.badImplementation(err);
  }
};

const updateProfile = async (request, h) => {
  try {
    console.log('=== UPDATE PROFILE DEBUG ===');
    console.log('Request payload:', request.payload);
    
    const { username, email, phone, address } = request.payload;
    const updateData = { username, email, phone };

    if (address) {
      try {
        updateData.address = JSON.parse(address);
      } catch (err) {
        throw Boom.badRequest('Format address tidak valid');
      }
    }

    // Debug: Cek apakah file foto ada
    const fotoFile = request.payload.foto;
    console.log('Foto file received:', fotoFile);
    console.log('Foto file type:', typeof fotoFile);
    console.log('Foto file has _data:', !!(fotoFile && fotoFile._data));

    if (fotoFile && fotoFile._data) {
      console.log('Processing image upload...');
      console.log('File size:', fotoFile._data.length);
      console.log('File headers:', fotoFile.headers);

      // Upload foto ke Cloudinary
      const uploadToCloudinary = () => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              folder: 'user_profile',
              resource_type: 'image',
              transformation: [
                { width: 400, height: 400, crop: 'fill' },
                { quality: 'auto' }
              ]
            },
            (error, result) => {
              if (error) {
                console.error('Cloudinary upload error:', error);
                return reject(Boom.badRequest('Gagal upload gambar: ' + error.message));
              }
              console.log('Cloudinary upload success:', result.secure_url);
              resolve(result);
            }
          );
          streamifier.createReadStream(fotoFile._data).pipe(stream);
        });
      };

      try {
        const uploadResult = await uploadToCloudinary();
        updateData.foto = uploadResult.secure_url;
        console.log('Image URL saved to updateData:', updateData.foto);
      } catch (uploadError) {
        console.error('Upload process error:', uploadError);
        throw Boom.badRequest('Gagal upload gambar ke cloud storage: ' + uploadError.message);
      }
    } else {
      console.log('No image file to upload or invalid file format');
    }

    console.log('Final updateData:', updateData);

    const user = await User.findByIdAndUpdate(
      request.auth.user.id,
      updateData,
      { new: true, runValidators: true, context: 'query' }
    ).select('-password');

    if (!user) throw Boom.notFound('User tidak ditemukan');

    console.log('Updated user data:', user);

    return h.response({ 
      status: 'success',
      success: true,
      message: 'Profil berhasil diperbarui', 
      data: user 
    });
  } catch (err) {
    console.error('Error in updateProfile:', err);
    if (err.isBoom) {
      throw err;
    }
    throw Boom.badImplementation(err.message || 'Terjadi kesalahan server');
  }
};

const getAllUsers = async (request, h) => {
  try {
    const users = await User.find().select('-password');
    return h.response({ 
      status: 'success', 
      data: users 
    });
  } catch (err) {
    console.error('Error in getAllUsers:', err);
    throw Boom.badImplementation(err);
  }
};

const adminDashboard = async (request, h) => {
  try {
    const trash = await Sampah.find({});
    const user = await User.find({});
    const artikel = await Artikel.find({});
    const penukaranItem = await PenukaranPoin.find({});
    const item = await PenukaranItem.find({});

    const dashData = {
      sampah: trash.length,
      user: user.length,
      artikel: artikel.length,
      penukaranItem: penukaranItem.length,
      item: item.length
    };

    return h.response({ status: "success", dashData }).code(200);
  } catch (error) {
    console.error("Error in adminDashboard:", error);
    return h.response({ status: "error", message: error.message }).code(500);
  }
};

module.exports = { getProfile, updateProfile, getAllUsers, adminDashboard };