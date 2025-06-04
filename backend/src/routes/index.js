const authRoutes = require('./auth');
const userRoutes = require('./user');
const sampahRoutes = require('./sampah');
const artikelRoutes = require('./artikel');
const poinRoutes = require('./poin');
const itemRoutes = require('./item'); // ✅ Tambahkan ini

const routes = [
  ...authRoutes,
  ...userRoutes,
  ...sampahRoutes,
  ...artikelRoutes,
  ...poinRoutes,
  ...itemRoutes, // ✅ Tambahkan ini
];

module.exports = routes;
