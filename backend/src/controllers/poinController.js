const PenukaranPoin = require("../models/PenukaranPoin");
const PenukaranItem = require("../models/PenukaranItem");
const User = require("../models/User");
const Boom = require("@hapi/boom");

const createPenukaran = async (request, h) => {
  try {
    const { jumlah, namaItem, namaPenerima, telp, alamat, foto } =
      request.payload;

    let finalFotoUrl = foto;

    // Jika foto belum dikirim sebagai URL, gunakan metode upload
    if (!finalFotoUrl && request.payload.foto && request.payload.foto._data) {
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

          streamifier.createReadStream(request.payload.foto._data).pipe(stream);
        });
      };

      const uploadResult = await uploadToCloudinary();
      finalFotoUrl = uploadResult.secure_url;
    }

    const newPenukaran = new PenukaranPoin({
      user: request.auth.user.id,
      jumlah,
      foto: finalFotoUrl, // simpan URL yang sudah dikirim dari frontend
      namaItem,
      namaPenerima,
      telp,
      alamat,
    });

    await newPenukaran.save();

    return h.response({ status: "success", data: newPenukaran }).code(201);
  } catch (err) {
    console.error(err);
    if (Boom.isBoom(err)) throw err;
    throw Boom.badImplementation(err);
  }
};

const listUserPenukaran = async (request, h) => {
  try {
    const data = await PenukaranPoin.find({ user: request.auth.user.id });
    return h.response({ status: "success", data });
  } catch (err) {
    throw Boom.badImplementation(err);
  }
};

const listAllPenukaran = async (request, h) => {
  try {
    const data = await PenukaranPoin.find().populate("user", "username email");
    return h.response({ status: "success", data });
  } catch (err) {
    throw Boom.badImplementation(err);
  }
};

const approvePenukaran = async (request, h) => {
  try {
    const { id } = request.params;
    const { status } = request.payload;
    const penukaran = await PenukaranPoin.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!penukaran) throw Boom.notFound("Data penukaran tidak ditemukan");
    // Jika status Diterima, kurangi poin user
    if (status === "Diterima") {
      await User.findByIdAndUpdate(penukaran.user, {
        $inc: { poin: -penukaran.jumlah },
      });

      const item = await PenukaranItem.findOne({ nama: penukaran.namaItem });
      if (!item) throw Boom.notFound("Item tidak ditemukan");

      if (item.stok <= 0) {
        throw Boom.badRequest("Stok item sudah habis");
      }

      item.stok -= 1;
      await item.save();
    }
    return h.response({ status: "success", data: penukaran });
  } catch (err) {
    throw Boom.badImplementation(err);
  }
};

module.exports = {
  createPenukaran,
  listUserPenukaran,
  listAllPenukaran,
  approvePenukaran,
};
