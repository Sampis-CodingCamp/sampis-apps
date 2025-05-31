const Joi = require('@hapi/joi');
const { getProfile, updateProfile, getAllUsers, adminDashboard } = require('../controllers/userController');
const { verifyToken, requireRole } = require('../middleware/auth');

module.exports = [
  {
    method: 'GET',
    path: '/users/profile',
    options: {
      pre: [verifyToken],
      handler: getProfile,
      description: 'Get user profile',
      tags: ['api', 'user']
    }
  },
  {
  method: 'PUT',
  path: '/users/profile',
  options: {
    pre: [verifyToken],
    payload: {
      multipart: true,
      parse: true,
      output: 'data',
      allow: 'multipart/form-data',
      maxBytes: 10 * 1024 * 1024, // 10MB
    },
    handler: updateProfile,
    description: 'Update user profile',
    tags: ['api', 'user']
  }
}
,
  {
    method: 'GET',
    path: '/users',
    options: {
      pre: [verifyToken, requireRole('admin')],
      handler: getAllUsers,
      description: 'Get all users (admin)',
      tags: ['api', 'user']
    }
  },
  {
    method: 'GET',
    path: '/dashboard',
    options: {
      pre: [verifyToken, requireRole('admin')],
      handler: adminDashboard,
      description: 'Get all users (admin)',
      tags: ['api', 'user']
    }
  },
]; 