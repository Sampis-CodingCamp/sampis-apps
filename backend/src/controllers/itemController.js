const PenukaranItem = require("../models/PenukaranItem");
const Boom = require("@hapi/boom");
const streamifier = require("streamifier");
const { v2: cloudinary } = require("cloudinary");

const createItem = async (request, h) => {
  console.log("CreateItem Called");

  try {
    const { nama, stok, jenis, poin, tanggal, deskripsi } = request.payload;
    const fotoFile = request.payload.foto;

    if (!fotoFile || !fotoFile._data) {
      throw Boom.badRequest("Foto tidak ditemukan");
    }

    // Bungkus upload_stream dalam Promise
    const uploadToCloudinary = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "item",
            resource_type: "image",
          },
          (error, result) => {
            if (error) return reject(Boom.badRequest("Gagal upload gambar"));
            resolve(result);
          }
        );

        streamifier.createReadStream(fotoFile._data).pipe(stream);
      });
    };

    const uploadResult = await uploadToCloudinary();

    const item = new PenukaranItem({
      nama,
      stok,
      jenis,
      poin,
      tanggal,
      foto: uploadResult.secure_url,
      deskripsi,
    });
    await item.save();
    return h.response({ status: "success", data: item }).code(201);
  } catch (err) {
    throw Boom.badImplementation(err);
  }
};

const listItem = async (request, h) => {
  try {
    const data = await PenukaranItem.find().populate("");
    return h.response({ status: "success", data });
  } catch (err) {
    throw Boom.badImplementation(err);
  }
};

const getItem = async (request, h) => {
  try {
    const { id } = request.params;
    const item = await PenukaranItem.findById(id).populate("");
    if (!item) throw Boom.notFound("Barang tidak ditemukan");
    return h.response({ status: "success", data: item });
  } catch (error) {
    throw Boom.badImplementation(err);
  }
};

const updateItem = async (request, h) => {
  try {
    const { id } = request.params;
    const { nama, stok, poin, jenis, deskripsi } = request.payload;
    let foto = null;

    const existingArtikel = await PenukaranItem.findById(id);
    if (!existingArtikel) throw Boom.notFound("Artikel tidak ditemukan");

    const fotoFile = request.payload.foto;
    if (fotoFile && fotoFile._data) {
      const uploadToCloudinary = () => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              folder: "item",
              resource_type: "image",
            },
            (error, result) => {
              if (error) return reject(Boom.badRequest("Gagal upload gambar"));
              resolve(result);
            }
          );
          streamifier.createReadStream(fotoFile._data).pipe(stream);
        });
      };

      const uploadResult = await uploadToCloudinary();
      foto = uploadResult.secure_url;
    }

    const updatedItem = await PenukaranItem.findByIdAndUpdate(
      id,
      {
        nama,
        stok,
        jenis,
        deskripsi,
        poin,
        foto: foto || existingArtikel.foto, // gunakan gambar baru jika ada, kalau tidak pakai yang lama
      },
      { new: true }
    );

    return h.response({ status: "success", data: updatedItem });
  } catch (error) {
    throw Boom.badImplementation(err);
  }
};

// Update belum

const deleteItem = async (request, h) => {
  try {
    const { id } = request.params;
    const item = await PenukaranItem.findByIdAndDelete(id);
    if (!item) throw Boom.notFound("Barang tidak ditemukan");
    return h.response({ status: "success", data: item });
  } catch (error) {
    throw Boom.badImplementation(err);
  }
};

module.exports = { createItem, listItem, deleteItem, getItem, updateItem };
