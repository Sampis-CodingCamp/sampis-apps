const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const plugins = require('./plugins');
const config = require('./config');
const connectDB = require('./config/database');
const connectCloudinary = require('./config/cloudinary')
const cors = require('hapi-cors')

const init = async () => {
  // Connect to MongoDB
  await connectDB();
  connectCloudinary()

  const server = Hapi.server({
    port: config.port,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['http://localhost:5173'],
        headers: ['Accept', 'Content-Type', 'Authorization'],
        additionalHeaders: ['X-Requested-With'],
        credentials: true,
      }
    }
  });

  // Register plugins
  await server.register(plugins);

  // Register routes
  server.route(routes);

  await server.start();
  console.log(`Server berjalan di ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init(); 