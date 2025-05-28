const User = require('../models/User');
const Boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config');

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    config.jwtSecret,
    { expiresIn: '24h' }
  );
};

const register = async (request, h) => {
  try {
    const { username, email, password } = request.payload;

    // Cek apakah user sudah ada
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      throw Boom.conflict('Email atau username sudah terdaftar');
    }

    // Buat user baru
    const user = new User({
      username,
      email,
      password
    });
    await user.save();

    // Generate token
    const token = generateToken(user);

    return h.response({
      status: 'success',
      message: 'Registrasi berhasil',
      data: {
        token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      }
    }).code(201);
  } catch (error) {
    throw Boom.badImplementation(error);
  }
};

const login = async (request, h) => {
  try {
    const { email, password } = request.payload;

    // Cari user
    const user = await User.findOne({ email });
    if (!user) {
      return Boom.unauthorized('Email atau password salah');
    }

    // Verifikasi password
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      return Boom.unauthorized('Email atau password salah');
    }

    if (email === process.env.ADMIN_EMAIL) {
      user.role = 'admin';
      await user.save(); // Simpan perubahan role
    }

    // Generate token
    const token = generateToken(user);

    return h.response({
      success: true,
      message: 'Login berhasil',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    }).code(200);
  } catch (error) {
    console.error("Login Error:", error);
    return Boom.internal('Terjadi kesalahan server.');
  }
};


module.exports = {
  register,
  login
}; 