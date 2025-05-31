const Artikel = require('../models/Artikel');
const Boom = require('@hapi/boom');
const streamifier = require('streamifier');
const { v2: cloudinary} = require('cloudinary')

const createArtikel = async (request, h) => {
  try {
    const { judul, isi, sumber } = request.payload;
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

    const artikel = new Artikel({
      judul,
      isi,
      sumber,
      foto: uploadResult.secure_url,
      author: request.auth.user.id,
      tanggal
    });
    await artikel.save();
    return h.response({ status: 'success', data: artikel }).code(201);
  } catch (err) {
    throw Boom.badImplementation(err);
  }
};

const listArtikel = async (request, h) => {
  try {
    const data = await Artikel.find().populate('author', 'username');
    return h.response({ status: 'success', data });
  } catch (err) {
    throw Boom.badImplementation(err);
  }
};

const getArtikel = async (request, h) => {
  try {
    const { id } = request.params;
    const artikel = await Artikel.findById(id).populate('author', 'username');
    if (!artikel) throw Boom.notFound('Artikel tidak ditemukan');
    return h.response({ status: 'success', data: artikel });
  } catch (err) {
    throw Boom.badImplementation(err);
  }
};

const updateArtikel = async (request, h) => {
  try {
    const { id } = request.params;
    const { judul, isi, sumber } = request.payload;
    let foto = null;

    const existingArtikel = await Artikel.findById(id);
    if (!existingArtikel) throw Boom.notFound('Artikel tidak ditemukan');

    // Cek apakah ada file baru
    const fotoFile = request.payload.foto;
    if (fotoFile && fotoFile._data) {
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
      foto = uploadResult.secure_url;
    }

    const updatedArtikel = await Artikel.findByIdAndUpdate(
      id,
      {
        judul,
        isi,
        sumber,
        tanggal: new Date(),
        foto: foto || existingArtikel.foto, // gunakan gambar baru jika ada, kalau tidak pakai yang lama
      },
      { new: true }
    );

    return h.response({ status: 'success', data: updatedArtikel });
  } catch (err) {
    throw Boom.badImplementation(err);
  }
};


const deleteArtikel = async (request, h) => {
  try {
    const { id } = request.params;
    const artikel = await Artikel.findByIdAndDelete(id);
    if (!artikel) throw Boom.notFound('Artikel tidak ditemukan');
    return h.response({ status: 'success', message: 'Artikel dihapus' });
  } catch (err) {
    throw Boom.badImplementation(err);
  }
};

module.exports = { createArtikel, listArtikel, getArtikel, updateArtikel, deleteArtikel }; 