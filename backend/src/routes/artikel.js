const Joi = require('@hapi/joi');
const { createArtikel, listArtikel, getArtikel, updateArtikel, deleteArtikel } = require('../controllers/artikelController');
const { verifyToken, requireRole } = require('../middleware/auth');

module.exports = [
  {
    method: 'POST',
    path: '/artikel',
    options: {
      pre: [verifyToken, requireRole('admin')],
        payload: {
          output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 10 * 1024 * 1024, // 10MB
        },
      handler: createArtikel,
      description: 'Create artikel (admin)',
      tags: ['api', 'artikel']
    }
  },
  {
    method: 'GET',
    path: '/artikel',
    options: {
      handler: listArtikel,
      description: 'List artikel',
      tags: ['api', 'artikel']
    }
  },
  {
    method: 'GET',
    path: '/artikel/{id}',
    options: {
      handler: getArtikel,
      description: 'Detail artikel',
      tags: ['api', 'artikel']
    }
  },
  {
    method: 'PUT',
    path: '/artikel/{id}',
    options: {
      pre: [verifyToken, requireRole('admin')],
        payload: {
          output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 10 * 1024 * 1024, // 10MB
        },
      handler: updateArtikel,
      description: 'Create artikel (admin)',
      tags: ['api', 'artikel']
    }
  },
  {
    method: 'DELETE',
    path: '/artikel/{id}',
    options: {
      pre: [verifyToken, requireRole('admin')],
      handler: deleteArtikel,
      description: 'Delete artikel (admin)',
      tags: ['api', 'artikel']
    }
  }
]; 